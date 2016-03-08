
//variables//

var buildings = [];
var buildings2 = [];
var buildings3 = [];

var stars = [];

var Sun = {
	x:250,
	y:100,
	c:"yellow",
	diameter: 150
}
var moon = {
	c:"white",
}


//loops // rows of buildings//

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
	for(var i = 0;i< 10;i++){
		var roofType = floor(random(1,4));
		buildings.push(new Building(i,height,150,random(350,450),roofType, "navy"));
		var roofType = floor(random(1,4));
		buildings2.push(new Building(i,height,random(80,98),random(200,400),roofType, "blue"));
		var roofType = floor(random(1,4));
		buildings3.push(new Building(i,height,random(50,100),random(100,250),roofType, "lightblue"));
		stars.push(new Star(random(0, 10),random(0,100),10,10,"yellow"));
		stars.push(new Star(random(0, 10),random(0,100),5,5,"yellow"));
		stars.push(new Star(random(0, 10),random(0,100),3,3,"yellow"));
		stars.push(new Star(random(0, 10),random(0,100),1,1,"yellow"));
		stars.push(new Star(random(0, 10),random(100,200),10,10,"yellow"));
		stars.push(new Star(random(0, 10),random(100,200),5,5,"yellow"));
		stars.push(new Star(random(0, 10),random(100,200),3,3,"yellow"));
		stars.push(new Star(random(0, 10),random(100,200),1,1,"yellow"));

	}

}

// draw sun & buildings //

function draw() {
  background("black");
	fill(moon.c);
	//arc(250,100,100,100,0, PI+QUARTER_PI, PIE);
	ellipse(250,100,100,100);
	fill("black");
		ellipse(275,75,100,100);
	for (var i= 0; i < buildings.length; i++){
		buildings[i].drawBuilding();
		buildings2[i].drawBuilding();
		buildings3[i].drawBuilding();
	}
	for(var i=0; i< 10; i++){
		stars[i].drawStar();

	}

}

// buildings & roof //

function Building (x,y,w,h,roof,col){
	this.x = x*100;
	this.y = y-h;
	this.w = w;
	this.h = h;
	this.roof = roof;
	this.col = col;
	this.drawBuilding = function (){
		fill(col);
		if (roof == 2){
		ellipse(this.x+(this.w/2),this.y,this.w,this.w);
		}
		if (roof == 3){
		triangle(this.x+(this.w/2),this.h,this.x,this.y,this.x+(this.w),this.y);
		}
		rect(this.x,this.y,this.w,this.h);

	}
};

function Star (x,y,d,d,col){
	this.x = x*100;
	this.y = y;
	this.d = d
	this.col = col
	this.drawStar = function (){
		fill(col);
		ellipse(this.x,this.y,this.d,this.d);

	};
}
