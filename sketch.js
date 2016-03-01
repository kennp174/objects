
//variables//

var buildings = [];
var buildings2 = [];
var buildings3 = [];
var Sun = {
	x:250,
	y:100,
	c:"yellow",
	diameter: 150
}
//loops // rows of buildings//

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
	for(var i = 0;i< 10;i++){
		var roofType = floor(random(1,4));
		buildings.push(new Building(i,height,150,random(350,500),roofType, "black"));
		var roofType = floor(random(1,4));
		buildings2.push(new Building(i,height,random(80,98),random(200,400),roofType, "navy"));
		var roofType = floor(random(1,4));
		buildings3.push(new Building(i,height,random(50,100),random(100,250),roofType, "blue"));
	}

}

// draw sun & buildings //

function draw() {
  background("beige");
	fill(Sun.c);
	ellipse(Sun.x,Sun.y,Sun.diameter,Sun.diameter);
	for (var i= 0; i < buildings.length; i++){
		buildings[i].drawBuilding();
		buildings2[i].drawBuilding();
		buildings3[i].drawBuilding();
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
