//5+5=a;
//var res1

var results = [];

function initCalculations() {
	var n1, n2, Element, ii;
	for( ii = 0; ii <=5; ii++ ){
		n1=Math.floor(Math.random() *50);
		n2=Math.floor(Math.random() *50);
		results.push(n1+n2);
		Element = document.getElementById("add"+ii);
		Element.innerHTML = n1 + "+" + n2 + "=";
	};
}


function pId( lID )
{
	var ele, a, b;
	console.log( lID );
	
	ele=document.getElementById("InputNumber"+lID);
	
	console.log( ele.value );
	
	if (ele.value == results[lID] )	
		{document.getElementById("result"+lID).innerHTML="Richtig"}	
	else 
		{document.getElementById("result"+lID).innerHTML="Falsch"}

}
//	a = document.getElementById("InputNumber1").value;
//if(a==10)
//    {document.getElementById("Addition1").innerHTML="Richtig"}
//else
//    {document.getElementById("Addition1").innerHTML="Falsch"}






















var results = [];

function initCalculations1() {
	var n3, n4, Element, aa;
	for( aa = 0; aa <=4; aa++ ){
		n3=Math.floor(Math.random() *50);
		n4=Math.floor(Math.random() *20);
		results.push(n3-n4);
		Element = document.getElementById("su"+aa);
		Element.innerHTML = n3 + "-" + n4 + "=";
	};
}


function aId( lID )
{
	var ele, c, d;
	console.log( lID );
	
	ele=document.getElementById("InputNumber"+lID);
	
	console.log( ele.value );
	
	if (ele.value == results[lID] )	
		{document.getElementById("result"+lID).innerHTML="Richtig"}	
	else 
		{document.getElementById("result"+lID).innerHTML="Falsch"}

}
































var results = [];

function initCalculations2() {
	var n5, n6, Element, bb;
	for( bb = 0; bb <=4; bb++ ){
		n5=Math.floor(Math.random() *10);
		n6=Math.floor(Math.random() *10);
		results.push(n5*n6);
		Element = document.getElementById("mu"+bb);
		Element.innerHTML = n5 + "*" + n6 + "=";
	};
}


function bId( lID )
{
	var ele, e, f;
	console.log( lID );
	
	ele=document.getElementById("InputNumber"+lID);
	
	console.log( ele.value );
	
	if (ele.value == results[lID] )	
		{document.getElementById("result"+lID).innerHTML="Richtig"}	
	else 
		{document.getElementById("result"+lID).innerHTML="Falsch"}

}

















//14/2=o
function Division1()
{
	var r;
	r = document.getElementById("InputNumber16").value;
	if(r==7)
		 {document.getElementById("Division1").innerHTML="Richtig"}
	 else
		  {document.getElementById("Division1").innerHTML="Falsch"}
}

//20/4=q
function Division2()
{
	var s;
	s = document.getElementById("InputNumber17").value;
	if(s==5)
		 {document.getElementById("Division2").innerHTML="Richtig"}
	 else
		  {document.getElementById("Division2").innerHTML="Falsch"}
}

//44/11=r
function Division3()
{
	var t;
	t = document.getElementById("InputNumber18").value;
	if(t==4)
		 {document.getElementById("Division3").innerHTML="Richtig"}
	 else
		  {document.getElementById("Division3").innerHTML="Falsch"}
}

//16/4=s
function Division4()
{
	var u;
	u = document.getElementById("InputNumber19").value;
	if(u==4)
		 {document.getElementById("Division4").innerHTML="Richtig"}
	 else
		  {document.getElementById("Division4").innerHTML="Falsch"}
}

//12/2=t
function Division5()
{
	var v;
	v = document.getElementById("InputNumber20").value;
	if(v==6)
		 {document.getElementById("Division5").innerHTML="Richtig"}
	 else
		  {document.getElementById("Division5").innerHTML="Falsch"}
}
