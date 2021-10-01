let color;
var color_picker;
var state;
state = "off";

function on() {
    state = "on";
}

function off() {
    state = "off";
}
document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        on()
    }
});
document.addEventListener("keyup", function(event) {
    if (event.keyCode === 32) {
        off()
    }
});


function setup() {
    createCanvas(windowWidth - 100, windowHeight - 50);
    color_picker = createColorPicker("black");

}

function draw() {
    if (state === 'on') {
        color = color_picker.color()
        noStroke();
        fill(color);
        ellipse(mouseX, mouseY, 10, 10)
    }

}