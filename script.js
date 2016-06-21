document.getElementById("quiz").addEventListener("click", quiz);
document.getElementById("submit").addEventListener("click", submit);
document.getElementById("restart").addEventListener("click", restart);
var index=0;
var counter=1;
var time=0;
var seconds=0;
var minutes=0;
var hours=0;
var finaltime;

function restart(){
	 location.reload();
	
}

function quiz(){
	document.getElementById("restart").style.display = "none";
	document.getElementById("result").style.display = "none";
	document.getElementById("quiz").style.display = "none";
	document.getElementById("id1").style.display = "block";
	document.getElementById("submit").style.display = "block";
	document.getElementById("time").style.display = "block";
	setInterval(setTime, 1000);
	
}

function submit(){
	


	var answer=document.querySelector('.Checkbox:checked').value;
	var correct=answer.charAt(0);
	var value=document.querySelector('.Checkbox:checked').value.charAt(1);
		//alert(correct);
		//alert(value);
	if(correct==value)
		index=index+1;
	document.getElementById("id"+counter).style.display = "none";
	counter=counter+1;
	if(counter!=7)
		document.getElementById("id"+counter).style.display = "block";
	else{
		document.getElementById("submit").style.display = "none";
		document.getElementById("time").style.display = "none";
		if(seconds<10)
			finaltime=hours+""+minutes+":"+"0"+seconds; 
		else
			finaltime=hours+""+minutes+":"+seconds;
		document.getElementById("result").style.display = "block";
		document.getElementById("result").innerHTML="You answered "+ index +  " correct answers in " +finaltime;
		document.getElementById("restart").style.display = "block";
		
		
	}	
	
	
		//alert(index);
	
	
}


function setTime(){
	time=time+1;
	
	if(time<60 ){
		seconds=seconds+1;
		if(seconds<10)
			document.getElementById("time").innerHTML=hours+""+minutes+":"+"0"+seconds;
		else	
			document.getElementById("time").innerHTML=hours+""+minutes+":"+seconds;
		
	}	
	else if(time>=60){
	
		minutes=minutes+1;
		seconds=0;
		document.getElementById("time").innerHTML=hours+""+minutes+":"+seconds;
		time=0;
	}
	if(minutes==60){	
		hours=hours+1;
		seconds=0;
		minutes=0;
		document.getElementById("time").innerHTML=hours+""+minutes+":"+seconds;
	}
	
	
}
