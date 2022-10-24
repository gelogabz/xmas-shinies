function makeIt_Shiny() {
    let colorChoices_R = Math.floor(Math.random() * 255);
    let colorChoices_G = Math.floor(Math.random() * 255);
    let colorChoices_B = Math.floor(Math.random() * 255);
    const rgbValue = `rgb(${colorChoices_R}, ${colorChoices_G}, ${colorChoices_B})`;

    document.getElementById("whatColor").innerHTML = rgbValue;

    //all ornaments variables here
    let ornaments_01 = document.querySelector(".or1");
    let ornaments_02 = document.querySelector(".or2");
    let ornaments_03 = document.querySelector(".or3");
    let ornaments_04 = document.querySelector(".or4");
    let ornaments_05 = document.querySelector(".or5");
    let ornaments_06 = document.querySelector(".or6");
    let ornaments_07 = document.querySelector(".or7");
    let ornaments_08 = document.querySelector(".or8");
    let ornaments_09 = document.querySelector(".or9");
    let ornaments_10 = document.querySelector(".or10");
    let ornaments_11 = document.querySelector(".or11");
    let ornaments_12 = document.querySelector(".or12");

    //all ornament styles here
    ornaments_01.style.backgroundColor = rgbValue;
    ornaments_02.style.backgroundColor = rgbValue;
    ornaments_03.style.backgroundColor = rgbValue;
    ornaments_04.style.backgroundColor = rgbValue;
    ornaments_05.style.backgroundColor = rgbValue;
    ornaments_06.style.backgroundColor = rgbValue;
    ornaments_07.style.backgroundColor = rgbValue;
    ornaments_08.style.backgroundColor = rgbValue;
    ornaments_09.style.backgroundColor = rgbValue;
    ornaments_10.style.backgroundColor = rgbValue;
    ornaments_11.style.backgroundColor = rgbValue;
    ornaments_12.style.backgroundColor = rgbValue;

    //this is so I can track the color histories
    console.log(rgbValue);

}

function startShinies() {
    start_the_shiny = setInterval(makeIt_Shiny, 500);
}

function stopShinies() {
    clearInterval(start_the_shiny);
    location.reload();
}