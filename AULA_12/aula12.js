function sendReq() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var objInsta = JSON.parse(this.responseText);
        montaPagina(objInsta);
      }
    };
  
  xhttp.open("GET","https://api.instagram.com/v1/users/self/?access_token=295055576.59daad8.36f72561617c4131b268ca77fed9c92c", true);
  //xhttp.open("GET","https://api.instagram.com/v1/locations/1023639940/media/recent?access_token=295055576.59daad8.36f72561617c4131b268ca77fed9c92c", true);
  xhttp.send();
}

function montaPagina(objInsta){
    var div = document.createElement("div");
    var divId = document.createElement("div");
    var imgPhoto = document.createElement("img");
    var divUser = document.createElement("div");
    var divFB = document.createElement("div");
    divId.innerHTML = objInsta.data.id;
    imgPhoto.src = objInsta.data.profile_picture;
    divUser.innerHTML = objInsta.data.username;
    divFB.innerHTML = objInsta.data.counts.followed_by;
    div.appendChild(divId);
    div.appendChild(imgPhoto);
    div.appendChild(divUser);
    div.appendChild(divFB);
    document.body.appendChild(div);
    div.style.backgroundColor = "#DCDCDC";
    div.style.borderRadius ="2%";
    imgPhoto.style.borderRadius = "50%";
    imgPhoto.style.borderColor = "black";
    imgPhoto.style.borderStyle = "solid";
    imgPhoto.style.display = "block";
    imgPhoto.style.marginLeft = "auto";
    imgPhoto.style.marginRight = "auto";
    divId.style.textAlign = "center";
    divUser.style.textAlign = "center";
    divUser.style.fontSize = "1.5em";
    divFB.style.textAlign = "center";
}

function teste(){
    sendReq();
}

