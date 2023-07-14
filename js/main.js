var quotes=[
    '“Be yourself; everyone else is already taken.”',
    '“So many books, so little time.”',
    '“A room without books is like a body without a soul.”',
    '“You only live once, but if you do it right, once is enough.”',
    '“Be the change that you wish to see in the world.”'

]

var Famous=[
    '― Oscar Wilde',
    '― Frank Zappa',
    '― Marcus Tullius Cicero',
    '― Mae West',
    '― Mahatma Gandhi'
]
function Popular_quotes() {
    var x=Math.floor(Math.random() * quotes.length)

    document.getElementById("advice").innerHTML=quotes[x]
     document.getElementById("owner").innerHTML=Famous[x]
    
}