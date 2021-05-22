var frameArray = [
    "https://pbanks.net/",
    "https://www.guilhermepantoja.com/",
    "https://carolpelu.com/",
    "https://recipeasly.org/",
    "https://ashkankamyab.com/",
    "https://cubecube.org/",
    "https://3dprintguides.com/",
    "https://limbo.center/",
    "https://sardine.reviews/"
];

const len = frameArray.length;
var idx = Math.floor(Math.random() * len);
var modal = document.getElementById("my_modal");
var webring_button = document.getElementById("show_webring");
var modal_ring = document.getElementById("my_webring");
var captionText = document.getElementById("caption");
var span = document.getElementsByClassName("close")[0];
show_slide();

webring_button.onclick = function() {
    modal.style.display = "block";
}

function show_slide() {
    modal_ring.src = frameArray[idx];
    captionText.innerHTML = frameArray[idx];
}

function next_slide() {
    if(idx === (len-1) ) {
        idx = 0;
    } else {
        ++idx;
    }
    show_slide();
}

function prev_slide() {
    if(idx === 0 ) {
        idx = len - 1;
    } else {
        --idx;
    }
    show_slide();
}

span.onclick = function() { 
    modal.style.display = "none";
}