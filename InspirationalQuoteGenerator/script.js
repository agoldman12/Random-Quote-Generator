//array of quotes to choose from
let quotes = ["It's not whether you get knocked down. It's whether you get up. -Vince Lombardi",
			  "All our dreams can come true, if we have the courage to pursue them.  -Walt Disney",
			  "Everything you've ever wanted is on the other side of fear. -George Adair",
			  "If you believe it will work out, you'll see opportunities. If you believe it won't, you will see obstacles. -Wayne Dyer",
			  "Believe you can and you're halfway there. - Theodore Roosevelt",
			  "Your mind is a powerful thing. When you fill it with positive thoughts, your life will start to change. -Unknown",
			  "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible. -Francis of Assisi",
			  "Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all. -Dale Carnegie",
			  "Strength does not come from physical capacity. It comes from an indomitable will. -Mahatma Gandhi",
			  "Go confidently in the direction of your dreams. Live the life you have imagined. -Henry David Thoreau"
			];


//pick random quote from the quotes array and display it in the 'bigBox' div
function showRandomQuote(){
	const quote = quotes[Math.floor(Math.random() * quotes.length)];
	const display = document.querySelector('#middleBox');
	display.innerHTML = quote;
}



//add event listener to the document but only run function if target of click has class 'showName'
document.addEventListener('click', function(e){
	if(e.target.classList.contains('show_quote')){
		showRandomQuote(e);
	}
});
