var pic1=document.getElementById("img1");
pic1.addEventListener("mouseover",mouseOver1); 
function mouseOver1()
{
    pic1.src="Img2.jpg"
}
pic1.addEventListener("mouseout",mouseOut1); 
function mouseOut1()
{
    pic1.src="Img1.jpg"
}