let btn = document.getElementById("btn-1");
let displayedQuote = document.getElementById("quote")

let quotes = [
'"The only way to do great work is to love what you do." - Steve Jobs',
`"In three words I can sum up everything I've learned about life: It goes on." - Robert Frost`,
`"The greatest glory in living lies not in never falling, but in rising every time we fall." - Nelson Mandela`,
`"Life is what happens when you're busy making other plans." - John Lennon`,
`"The only thing necessary for the triumph of evil is for good men to do nothing." - Edmund Burke`,
`"The future belongs to those who believe in the beauty of their dreams." - Eleanor Roosevelt`,
`"In the end, it's not the years in your life that count. It's the life in your years." - Abraham Lincoln`,
`"The only limit to our realization of tomorrow will be our doubts of today." - Franklin D. Roosevelt`,
`"The best time to plant a tree was 20 years ago. The second best time is now." - Chinese Proverb`,
`"You only live once, but if you do it right, once is enough." - Mae West`,
`"Believe you can and you're halfway there." - Theodore Roosevelt`,
`"It is never too late to be what you might have been." - George Eliot`,
`"Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill`,
`"The only thing we have to fear is fear itself." - Franklin D. Roosevelt`,
`"Be yourself; everyone else is already taken." - Oscar Wilde`,
`"It does not matter how slowly you go as long as you do not stop." - Confucius`,
`"The only true wisdom is in knowing you know nothing." - Socrates`,
`"The journey of a thousand miles begins with one step." - Lao Tzu`,
`"Happiness is not something ready-made. It comes from your own actions." - Dalai Lama`,
`"Life is 10% what happens to us and 90% how we react to it." - Charles R. Swindoll`,
`"Change your thoughts and you change your world." - Norman Vincent Peale`,
`"The only way to do great work is to love what you do." - Steve Jobs`,
`"The future belongs to those who believe in the beauty of their dreams." - Eleanor Roosevelt`,
`"The best way to predict the future is to create it." - Peter Drucker`,
`"Life is a succession of lessons which must be lived to be understood." - Helen Keller`,
`"You miss 100% of the shots you don't take." - Wayne Gretzky`,
`"The only thing worse than being blind is having sight but no vision." - Helen Keller`,
`"Keep your face always toward the sunshine—and shadows will fall behind you." - Walt Whitman`,
`"Everything you've ever wanted is on the other side of fear." - George Addair`,
`"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful." - Albert Schweitzer`
];

btn.addEventListener("click", function() {
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length) ]
    console.log(randomQuote);

    displayedQuote.innerHTML = randomQuote;
})