// // Add your code here
// $(".filter-button").on("click", function(e){
// 	e.preventDefault();

// 	//trying to actually get the images to toggle
// 	$(".this").toggle();
// 	$(this).toggleClass("active");
	
// });

$("#monkey").on("click", function(){
	/*$(".monkey").hide();*/
	$(".monkey").toggle(); /*show and hide*/
	$(this).toggleClass("active"); /*makes button gray for monkeys*/
});

$("#dog").on("click", function(){
	/*$(".monkey").hide();*/
	$(".dog").toggle(); /*show and hide*/
	$(this).toggleClass("active"); /*makes button gray for dog*/
});

$("#cat").on("click", function(){
	/*$(".monkey").hide();*/
	$(".cat").toggle(); /*show and hide*/
	$(this).toggleClass("active"); /*makes button gray for cats*/
});

