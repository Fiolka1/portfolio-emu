function bigPic(obejkt) {
  shadow_display = document.getElementById("shadow").style.display;
  if (shadow_display == "flex") {
    document.getElementById("shadow").style.display = "none";
  } else {
    document.getElementById("shadow").style.display = "flex";
  }

//   console.log(shadow_display);
//   console.log(shadow_display === "flex");

try {
    images.remove()
} catch{
     console.log("działa błąd")}
    

 images=document.createElement("img");
 images.src=obejkt.src;
 images.alt=obejkt.alt;
 images.id="created_image";
 document.getElementById("shadow").appendChild(images);


}
