let time = 5000,
    currentImageIndex = 0
images = document
    .querySelectorAll(".slide img")
max = images.length;

function nextImage() {

    images[currentImageIndex]
        .classList.remove("f1")

    currentImageIndex++

    if (currentImageIndex >= max)
        currentImageIndex = 0;


    images[currentImageIndex]
        .classList.add("f1")
}

function start() {
    setInterval(() => {
        nextImage()

    }, time)
}

window.addEventListener("load", start)