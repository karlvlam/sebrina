var fs = require('fs');
var assert = require('assert');


eval( fs.readFileSync(__dirname+'/../sebrina.js', 'utf8'))


var wordsToSebrina = [
    '纖雲弄巧，飛星傳恨，銀漢迢迢暗度。金風玉露一相逢，便勝卻人間無數。',
    '柔情似水，佳期如夢，忍顧鵲橋歸路！兩情若是久長時，又豈在朝朝暮暮！'
]

console.log('Start testing..', JSON.stringify(wordsToSebrina,null,2))
wordsToSebrina.forEach(function(words){
    sebrina(ss(words), function(err, res){
        assert.deepEqual(words, res) 
    })
    sebrina(ssMin(words), function(err, res){
        assert.deepEqual(words, res) 
    })
})
console.log('Test success!')

