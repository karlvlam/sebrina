

function sebrina(cmd, cb){
    var key = 'sebrina'
    var output = ''
    var act = {
        clear: function(){ stack = [] },
        add: function(){ stack.push(stack.pop() + stack.pop())},
        sub: function(){ stack.push(stack.pop() - stack.pop())},
        mult: function(){ stack.push(stack.pop() * stack.pop())},
        pow: function(){ stack.push(Math.pow(stack.pop(), stack.pop()))},
        printStr: function(){ output += String.fromCodePoint(stack.pop())},
        printNum: function(){ output += stack.pop().toString()},
        push: function(val){ stack.push(val) },
    }

    function op(n){
        switch(n){
            case 0:
                act['clear']()
                break
            case 1:
                act['add']()
                break
            case 2:
                act['sub']()
                break
            case 3:
                act['mult']()
                break
            case 4:
                act['pow']()
                break
            case 5:
                act['printStr']()
                break
            case 6:
                act['printNum']()
                break
            default:
                act['push'](n-7)
        }
            
    }


    var stack = []
    function processLine(line, idx){
        var count = 0
        line.split(' ').forEach(function(w){
            if (w === key){
                count += 1
            }
        })
        //console.log(count)
        if (count >= 1 && count <= 4 && stack.length < 2) { 
            throw 'Error: Line ' + (idx-1) +' : stack needs 2 items'
        }
        if (count >= 5 && count <= 6 && stack.length < 1) { 
            throw 'Error: Line ' + (idx-1) +' : stack needs 1 item'
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

var a = "sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina\n"
a += "brina\n"
a += "sebrina \n"

sebrina(a, function(err, result){
    console.log(err)
    console.log(result)
})

