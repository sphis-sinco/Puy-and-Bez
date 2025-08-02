function detecDevice() {
        let device = "";
        let isMobile = window.orientation > -1;
        console.log(isMobile ? "Mobile" : "Not mobile");

        return isMobile;
}

const mobile = detecDevice();

var imgs = document.getElementsByClassName("skit-img");

for (let img in imgs) {
        console.log(img.src);
        if (mobile) img.style = "width: 25%";
}
