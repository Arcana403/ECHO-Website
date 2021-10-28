function homeOpen(){
	document.title="ECHO (ALA): Home";
	document.getElementById("welcome").innerHTML="Home";
	document.getElementById("welcomePage").style.display="none";
}
function actOpen(){
	document.title="ECHO (ALA): Activities";
	document.getElementById("welcome").innerHTML="Activities";
	document.getElementById("welcomePage").style.display="none";
}
function memberOpen(){
	document.title="ECHO (ALA): Membership";
	document.getElementById("welcome").innerHTML="Membership";
	document.getElementById("welcomePage").style.display="none";
}
function aboutOpen(){
	document.title="ECHO (ALA): About";
	document.getElementById("welcome").innerHTML="About";
	document.getElementById("welcomePage").style.display="none";
}
function galleryOpen(){
	window.open("Index.html#Gallery", "_self");
	slideit();
}
var SMT= new Array();
SMT[0] = new Image();
SMT[0].src = "Images/SMT/1.JPG"; 
SMT[1] = new Image();
SMT[1].src = "Images/SMT/2.JPG";
SMT[2] = new Image();
SMT[2].src = "Images/SMT/3.JPG";
SMT[3] = new Image();
SMT[3].src = "Images/SMT/4.JPG"; 
SMT[4] = new Image();
SMT[4].src = "Images/SMT/5.JPG";
SMT[5] = new Image();
SMT[5].src = "Images/SMT/6.JPG";
SMT[6] = new Image();
SMT[6].src = "Images/SMT/7.JPG"; 
SMT[7] = new Image();
SMT[7].src = "Images/SMT/8.JPG";
SMT[8] = new Image();
SMT[8].src = "Images/SMT/9.JPG";
SMT[9] = new Image();
SMT[9].src = "Images/SMT/10.JPG";

var NOI= new Array();
NOI[0] = new Image();
NOI[0].src = "Images/NOI/1.JPG"; 
NOI[1] = new Image();
NOI[1].src = "Images/NOI/2.JPG";
NOI[2] = new Image();
NOI[2].src = "Images/NOI/3.JPG";
NOI[3] = new Image();
NOI[3].src = "Images/NOI/4.JPG"; 
NOI[4] = new Image();
NOI[4].src = "Images/NOI/5.JPG";
NOI[5] = new Image();
NOI[5].src = "Images/NOI/6.JPG";
NOI[6] = new Image();
NOI[6].src = "Images/NOI/7.JPG"; 
NOI[7] = new Image();
NOI[7].src = "Images/NOI/8.JPG";
NOI[8] = new Image();
NOI[8].src = "Images/NOI/9.JPG";
NOI[9] = new Image();
NOI[9].src = "Images/NOI/10.JPG";

var IC= new Array();
IC[0] = new Image();
IC[0].src = "Images/IC/1.JPG"; 
IC[1] = new Image();
IC[1].src = "Images/IC/2.JPG";
IC[2] = new Image();
IC[2].src = "Images/IC/3.JPG";
IC[3] = new Image();
IC[3].src = "Images/IC/4.JPG"; 
IC[4] = new Image();
IC[4].src = "Images/IC/5.JPG";
IC[5] = new Image();
IC[5].src = "Images/IC/6.JPG";
IC[6] = new Image();
IC[6].src = "Images/IC/7.JPG"; 
IC[7] = new Image();
IC[7].src = "Images/IC/8.JPG";
IC[8] = new Image();
IC[8].src = "Images/IC/9.JPG";
IC[9] = new Image();
IC[9].src = "Images/IC/10.JPG";
	
var step=0;
var x=1;
var a;
function slideit(){
	if(x==1){
		document.getElementById("welcome").innerHTML="SMT Week C++ Outreach and Competition";
		document.getElementById("slide").style.width="55%";
		if (!document.images){
			return;
		}
		document.getElementById('slide').src = SMT[step].src;
		if (step<9){
			step++;
		}
		else{
			step=0;
		}
		setTimeout("slideit()",2000);
	}
	else if(x==2){
		document.getElementById("slide").style.width="50%";
		document.getElementById("welcome").innerHTML="National Olympiad in Informatics";
		if (!document.images){
			return;
		}
		document.getElementById('slide').src = NOI[step].src;
		if (step<9){
			step++;
		}
		else{
			step=0;
		}
		setTimeout("slideit()",2000);
	}
	else if(x==3){
		document.getElementById("slide").style.width="55%";
		document.getElementById("welcome").innerHTML="Interactive Center Opening";
		if (!document.images){
			return;
		}
		document.getElementById('slide').src = IC[step].src;
		if (step<9){
			step++;	
		}
		else{
			step=0;
		}
		setTimeout("slideit()",2000);
	}
}
function next(){
	x++;
	if(x>3){
		x=1;
	}
}
function prev(){
	x--;
	if(x<1){
		x=3;
	}
}
slideit();