let image_width=0
function bigPic(objekt) {
    console.log(objekt.width);
    image_id=objekt.id;
    
   if (image_width==objekt.width) {
    document.getElementById(image_id).style.height="100%"
    document.getElementById(image_id).style.width="100%"
   } else {
     document.getElementById(image_id).style.height="500px"
    document.getElementById(image_id).style.width="500px"
    image_width=objekt.width
   }
   
   
    // height: 200px;
    // width: 200px;
     // objekt.height="400px"
    // objekt.width="400px"
}