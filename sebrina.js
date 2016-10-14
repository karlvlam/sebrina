

function sebrina(cmd){
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
    function processLine(line){
        var count = 0
        line.split(' ').forEach(function(w){
            if (w === key){
                count += 1
            }
        })
        console.log(count)
        op(count)
    }
    cmd.toLowerCase().split('\n').forEach(processLine)
    console.log(output)

}

var a = "sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina\n"
a += "sebrina a b c sebrina sebrina sebrina sebrina sebrina\n"

sebrina(a)
