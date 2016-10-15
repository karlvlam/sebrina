

/*
 * @function sebrina - process sebrina language
 * @param {string} cmd -  
 * @param cb - callback function of fn(err, result)  
 *
 */
function sebrina(cmd, cb){
    var key = 'sebrina'
    var stack = [] // stack for processing the data
    var output = ''
    var act = {
        clear: function(){ stack = [] },
        add: function(){ stack.push(stack.pop() + stack.pop())},
        sub: function(){ stack.push(stack.pop() - stack.pop())},
        mult: function(){ stack.push(stack.pop() * stack.pop())},
        pow: function(){ stack.push(Math.pow(stack.pop(), stack.pop()))},
        flushStr: function(){ output += String.fromCodePoint(stack.pop())},
        flushNum: function(){ output += stack.pop().toString()},
        push: function(val){ stack.push(val) }
    }

    function op(n){
        switch(n){
            case 0:
                act['clear']()
                break
            case 1:
                act['pow']()
                break
            case 2:
                act['add']()
                break
            case 3:
                act['sub']()
                break
            case 4:
                act['mult']()
                break
            case 5:
                act['flushStr']()
                break
            case 6:
                act['flushNum']()
                break
            default:
                act['push'](n-7)
        }

    }


    function processLine(line, idx){
        // skip comment
        if(line.match(/#/)){
            return
        }
        var count = 0
        line.split(' ').forEach(function(w){
            if (w === key){
                count += 1
            }
        })
        //console.log(count)
        if (count >= 1 && count <= 4 && stack.length < 2) { 
            throw 'Error: Line ' + (idx+1) +' : stack needs 2 items'
        }
        if (count >= 5 && count <= 6 && stack.length < 1) { 
            throw 'Error: Line ' + (idx+1) +' : stack needs 1 item'
        }
        op(count)
    }
    try{
        cmd.toLowerCase().split('\n').forEach(processLine)
    }catch(err){
        cb(err)
        return
    }
    cb(null, output)

}

/*
 * @function ss - convert a string in to sebrina script 
 * @param {string} s - any string  
 * @return {string} - the sebrina script of the string input 
 *
 */
function ss(s){
    var key = 'sebrina'
    var output = ''
    function _gen(n, isString){
        var o = []
        if (isString){
            n += 7
        }
        for (var i=0; i < n; i++){
            o.push(key)
        }
        return o.join(' ') + '\n'
    }
    for (var i=0; i < s.length; i++){
        output += _gen(s.codePointAt(i), true) 
        output += _gen(5)
    }
    return output
}

/*
 * @function ss - convert a string in to sebrina script(use less space)
 * @param {string} s - any string  
 * @return {string} - the sebrina script of the string input 
 *
 */
function ssMin(s){
    var key = 'sebrina'
    var output = [] 
    var andTable = [1,2,4,8,16,32,64,128,256,512,
        1024,2048,4096,8192,16384,32768] 

    function _gen(n, isNum){
        var o = []
        if (isNum){
            n += 7
        }
        for (var i=0; i < n; i++){
            o.push(key)
        }
        return o.join(' ') + '\n'
    }

    /* match every bit of a char, then add them all */
    function _genShort(n){
        var bits = []
        if (n < 16){
            bits.push(_gen(n, true))
        }else{
            andTable.forEach(function(s, idx){
                if ((n & s) === s){
                    if (s < 16){
                        bits.push(_gen(s, true))

                    }else{
                        var tmp = []
                        tmp.push(_gen(idx, true))
                        tmp.push(_gen(2, true))
                        tmp.push(_gen(1))
                        bits.push(tmp.join(''))
                    }
                }
            })
        }

        bits.forEach(function(s,idx){
            output.push(s)
            if (idx !== 0){
                output.push(_gen(2))
            }

        })

    }
    for (var i=0; i < s.length; i++){
        _genShort(s.codePointAt(i)) 
        output.push(_gen(5))
    }
    return output.join('')
}



