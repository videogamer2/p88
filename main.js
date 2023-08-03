
var canvas = new fabric.Canvas("myCanvas");
var bx = 20;
var by = 20;
var hx = 800;
var hy = 200;

block_image_width = 5;
block_image_height = 5;

function loadImg(){
	fabric.Image.fromURL("golf-h.png", function(Img) {
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:hy,
			left:hx
		});
		canvas.add(hole_obj);
		});
	newImage();
}

function newImage()
{
	fabric.Image.fromURL("ball.png", function(Img) {
		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top:by,
			left:bx
		});
		canvas.add(ball_obj);
		})
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((bx == hx)&&(by == hy)){
		canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML="Você Conseguiu !!";
		document.getElementById("myCanvas").style.borderColor="red";
	}

		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(by>=20){
		by = by - block_image_height;
		canvas.remove(ball_obj);}
		newImage();
	}

	function down()
	{
		if(by<=450){
		by = by + block_image_height;
		canvas.remove(ball_obj);}
		newImage();
	}

	function left()
	{
		if(bx >=5)
		{
			bx = bx - block_image_width;
			canvas.remove(ball_obj);
			newImage();
		}
	}

	function right()
	{
		if(bx <=1050)
		{
			bx = bx + block_image_width;
			canvas.remove(ball_obj);
			newImage();
		}
	}


