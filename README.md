

         _______._______.______  .______      __ .__   __.     ___     
        /       |   ____|   _  \ |   _  \    |  ||  \ |  |    /   \    
       |   (----|  |__  |  |_)  ||  |_)  |   |  ||   \|  |   /  ^  \   
        \   \   |   __| |   _  < |      /    |  ||  . `  |  /  /_\  \  
    .----)   |  |  |____|  |_)  ||  |\  \----|  ||  |\   | /  _____  \ 
    |_______/   |_______|______/ | _| `._____|__||__| \__|/__/     \__\



# Sebrina?


I need a funny language to communicate and being named after my girl friend. 

The syntax is very simple: 
- only a key word "sebrina" + "\n"
- lines contains "#" are comments, will be skipped by the parser
- words other than the above will be skipped

# Specification

| #  | Name | Description |
| ------------- | ------------- | ------------- | 
| 0 | clear | clear the stack |
| 1 | power | topmost to the power of second topmost |
| 2 | add | topmost + second topmost |
| 3 | sub | topmost - second topmost |
| 4 | mult | topmost * second topmost |
| 5 | flushStr | flush string - flush the topmost value to the output,as char |
| 6 | flushNum | flush number - flush the topmost value to the output,as number | 
| n | push | push n-7 sebrina onto the stack |


# Credits
This language is inspired by :
- Pikachu language https://en.wikipedia.org/wiki/Pikachu
- MK language of Hong Kong 
- Chicken language http://torso.me/chicken

# Example
Here is an example of output the text "Sebrina". 
You can also play with language at http://sebrina.love
```
# The code point of "Sebrina" is 83,101,98,114,105,110,97
# Next 3 lines : 2 + 1 = 3
sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina
sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina
sebrina sebrina
# Next 3 lines : 2 ^ 4 = 16
sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina
sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina
sebrina
# Next 1 line : 16 + 3 = 19
sebrina sebrina
# Next 3 lines : 2 ^ 6 = 64 
sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina
sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina
sebrina
# Next 1 line : 64 + 19 = 83
sebrina sebrina
# Next 1 line : output 83 as string ("S") 
sebrina sebrina sebrina sebrina sebrina
sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina
sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina
sebrina sebrina
sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina
sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina
sebrina
sebrina sebrina
sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina
sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina
sebrina
sebrina sebrina
# Next 1 line : output 101 as string ("e") 
sebrina sebrina sebrina sebrina sebrina
sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina
sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina
sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina
sebrina
sebrina sebrina
sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina
sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina
sebrina
sebrina sebrina
# Next 1 line : output 98 as string ("b") 
sebrina sebrina sebrina sebrina sebrina
sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina
sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina
sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina
sebrina
sebrina sebrina
sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina
sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina
sebrina
sebrina sebrina
sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina
sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina
sebrina
sebrina sebrina
# Next 1 line : output 114 as string ("r") 
sebrina sebrina sebrina sebrina sebrina
sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina
sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina
sebrina sebrina
sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina
sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina
sebrina
sebrina sebrina
sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina
sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina
sebrina
sebrina sebrina
# Next 1 line : output 105 as string ("i") 
sebrina sebrina sebrina sebrina sebrina
sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina
sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina
sebrina sebrina
sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina
sebrina sebrina
sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina
sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina
sebrina
sebrina sebrina
sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina
sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina
sebrina
sebrina sebrina
# Next 1 line : output 110 as string ("n") 
sebrina sebrina sebrina sebrina sebrina
sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina
sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina
sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina
sebrina
sebrina sebrina
sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina
sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina sebrina
sebrina
sebrina sebrina
# Next 1 line : output 97 as string ("a") 
sebrina sebrina sebrina sebrina sebrina
```



