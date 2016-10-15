
var fs = require('fs');
var assert = require('assert');


eval( fs.readFileSync('../sebrina.js', 'utf8'))


var wordsToSebrina = [
    'Dear 老婆仔'
]

wordsToSebrina.forEach(function(words){
    sebrina(ss(words), function(err, res){
        assert.deepEqual(words, res) 
    })
    sebrina(ssMin(words), function(err, res){
        assert.deepEqual(words, res) 
    })
})


