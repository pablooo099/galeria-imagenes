function agregaImagen() {
    var url = document.getElementById("imagenURL").value.trim();
    var pie = document.getElementById("pieFoto").value.trim();
    var galeria = document.getElementById("galeriaImagenes");


    if (url === "" || pie === "") {
        alert("Escribe la ruta de la imagen y el pie de foto.");
        return;
    }


    if (!galeria) {
        alert("No encuentro la galería en el HTML.");
        return;
    }


    var div = document.createElement("div");
    var img = document.createElement("img");
    var p = document.createElement("p");


    img.src = url;
    img.alt = pie;
    img.style.width = "250px";
    img.style.height = "180px";
    img.style.objectFit = "cover";


    img.onerror = function() {
        alert("No se pudo cargar la imagen. Revisa su ruta.");
        div.remove();
    };


    p.textContent = pie;


    div.appendChild(img);
    div.appendChild(p);
    galeria.appendChild(div);


    document.getElementById("imagenURL").value = "";
    document.getElementById("pieFoto").value = "";
}






