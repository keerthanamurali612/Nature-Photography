// Write your JS in here
var pics = [
	"img/a.jpg", //0
	"img/b.jpg", //1
	"img/c.jpg",//2
	"img/d.jpg",//3
	"img/e.jpg",//4
	"img/g.jpg"//5
	
	                    //6
];

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter=1;
btn.addEventListener("click",function(){
	if (counter===6) {
		counter=0;
	}
   img.src=pics[counter];
   counter=counter+1;
});
