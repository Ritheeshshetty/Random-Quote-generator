let btn=document.getElementById('btn');
let output=document.getElementById('output');
let quotes=[
    'Attitude is no substitute for competence.-- Eric S. Raymond, How to become a hacker',
    'No problem should ever have to be solved twice.-- Eric S. Raymond, How to become a hacker',
    'Donot worry about what anybody else is going to do. The best way topredict the future is to invent it.-- Alan Kay',
    'A little learning is a dangerous thing.-- Alexander Pope',
    'There really is no learning without doing.-- Roger Schank, Engines for Education',
    'Simplicity takes effort-- genius, even.-- Paul Graham',
    'Only bad designers blame their failings on the users.-- unknown',
    'If there is a will, there is a way.-- unknown',
    'In theory, there is no difference between theory and practice. But in practice, there is. -- Albert Einstein',
    'All great things require great dedication.-- Chuck Norris(?)'
];

btn.addEventListener('click',function(){
    var randomQuote=quotes[Math.floor(Math.random()* quotes.length)]
    output.innerHTML=randomQuote;
})