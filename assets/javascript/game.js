var jewelOne = 0
var jewelTwo = 0
var jewelThree  = 0
var jewelFour = 0
var randomNumber = ""
var yourTotal = 0
var wins = 0
var losses = 0


function startGame(){
	//creating randomly generated number// 
	randomNumber = Math.floor(Math.random()*100);
	$(".random").html(randomNumber);
	
//creating a random number for each jewel
	$(".jewel").each(function(){
		$(this).attr("data-value", Math.floor(Math.random()*10));
	})

	$(".jewel").on("click", function(){
		console.log(this)
		//pulling data(value) from selected jewel 
		var thisValue = $(this).attr("data-value");
		//adding the value of the selected jewel to the total number
		yourTotal = yourTotal + parseInt(thisValue);

		//replacing the new total number in the html
		$(".totalscorenumber").html(yourTotal);
		//console.log(yourTotal);

		if(yourTotal > randomNumber){
		losses++;
		alert("you lose");

		$(".losses").text("Losses"+" "+losses);
		reset()
	}
		else if (yourTotal===randomNumber){
		wins++;
		alert("you win");
		$(".wins").text("Wins"+" "+wins);
		reset();

		}
	})
	
}

function reset(){
	yourTotal=0;
$(".totalscorenumber").html(yourTotal);
console.log(yourTotal);
startGame()
}





startGame()



	
	
	//else(yourTotal===randomNumber){
	//	alert("you win!");
	//}


	//replace class=random with randomNumber//


	//create a random number for each jewel

	// var jewelOne = Math.floor(Math.random()*10);
	// var jewelTwo = Math.floor(Math.random()*10);
	// var jewelThree = Math.floor(Math.random()*10);
	// var jewelFour = Math.floor(Math.random()*10);

	// console.log(jewelOne);
	// console.log(jewelTwo);
	// console.log(jewelThree);
	// console.log(jewelFour);






	//  $(".jewels1").on("click",function(){
	// console.log(yourTotal + jewelOne);
	// })

	//  $(".jewels2").on("click",function(){
	// console.log(yourTotal + jewelTwo);
	// })

	// $(".jewels3").on("click",function(){
	// console.log(yourTotal + jewelThree);
	// })

	// $(".jewels4").on("click",function(){
	// console.log(yourTotal + jewelFour);
	// })






















