var x = "none"
var y = "hidden"


document.getElementById("statsred").style.display = x;

document.getElementById("maincolorsstat").style.display = x;

document.getElementById("menu_green").style.display = x;

document.getElementById("menu_blue").style.display = x;

document.getElementById("gradientsection").style.display = x;

document.getElementById("opacityGenSecond").style.display = x;

document.getElementById("gainbutton").style.visibility = y;

document.getElementById("backbutton").style.visibility = y;

document.getElementById("mainColorRed").style.background = "rgba(0, 0, 0, 0)";

document.getElementById("opacitySectext").style.visibility = y;

document.getElementById("opacityGen2").style.visibility = y;

document.getElementById("opacityGen3").style.visibility = y;

document.getElementById("opacityGen4").style.visibility = y;

document.getElementById("opacityGen5").style.visibility = y;


var opacity = 1000000;
var opacityTotal = 0;
var opacitySec = 0;
var opacityToHTML = 0;
var red = 0;
var blue = 0;
var green = 0;

var OpacitySecGen1 = 0;
var OpacitySecGen2 = 0;
var OpacitySecGen3 = 0;
var OpacitySecGen4 = 0;
var OpacitySecGen5 = 0;

function reset() {
    opacity = 0;
    opacityTotal = 0;
    opacitySec = 0;
    opacityToHTML = 0;

    OpacitySecGen1 = 0;
    OpacitySecGen2 = 0;
    OpacitySecGen3 = 0;
    OpacitySecGen4 = 0;
    OpacitySecGen5 = 0;

    gen1[4] = 0;
    gen2[4] = 0;
    gen3[4] = 0;
    gen4[4] = 0;
    gen5[4] = 0;

    document.getElementById("opacityGenSecond").style.display = x;
    document.getElementById("opacityGenFirst").style.display = "";
    clearInterval(OpacityTimer, 100);

    document.getElementById("Gen1").innerHTML = Number(gen1[1] * (gen1[2] ** gen1[4])).toFixed(3);
    document.getElementById("Gen2").innerHTML = Number(gen2[1] * (gen2[2] ** gen2[4])).toFixed(3);
    document.getElementById("Gen3").innerHTML = Number(gen3[1] * (gen3[2] ** gen3[4])).toFixed(3);
    document.getElementById("Gen4").innerHTML = Number(gen4[1] * (gen4[2] ** gen4[4])).toFixed(3);
    document.getElementById("Gen5").innerHTML = Number(gen5[1] * (gen5[2] ** gen5[4])).toFixed(3);
}

//costNext = costBase * (rateGrowth) ^ owned
//productionTotal = (productionBase * owned) * multipliers

//arr = [type, costBase, rateGrowth, productionBase, owned]

var gen1 = ["opacity", 0.003738, 1.07, 0.00167, 0];
var gen2 = ["opacity", 0.060, 1.15, 0.020, 0];
var gen3 = ["opacity", 0.720, 1.14, 0.090, 0];
var gen4 = ["opacity", 8.640, 1.13, 0.360, 0];
var gen5 = ["opacity", 103.680, 1.12, 2.160, 0];

/*
function changeRgba(color, mode, productionTotal, colorOpacity) {
    debugger
    let rgba = document.getElementById(color).style.backgroundColor;
    rgba = rgba.substring(5, rgba.length - 1).replace(/ /g, '').split(',');
    let red = Number(rgba[0]);
    let green = Number(rgba[1]);
    let blue = Number(rgba[2]);
    let opacity = Number(rgba[3]);
    if (mode == 0) {            // Change red
        red += (productionTotal / 10);
        document.getElementById(color).style.background = "rgba(" + red + ", " + green + ", " + blue + ", " + opacity + ")";
    } 
    else if (mode == 1) {       // Change green
        green += (productionTotal / 10);
        document.getElementById(color).style.background = "rgba(" + red + ", " + green + ", " + blue + ", " + opacity + ")";
    }
    else if (mode == 2) {       // Change blue
        blue += (productionTotal / 10);
        document.getElementById(color).style.background = "rgba(" + red + ", " + green + ", " + blue + ", " + opacity + ")";
    }
    else if (mode == 3) {       //Change opacity
        opacity += (productionTotal / 10);
        document.getElementById(color).style.background = "rgba(" + red + ", " + green + ", " + blue + ", " + opacity + ")";
    }
}
*/

function changeRgba(color, mode, value) {
    let rgba = document.getElementById(color).style.backgroundColor;
    if (rgba.includes("rgba")) {
        rgba = rgba.substring(5, rgba.length - 1).replace(/ /g, '').split(',');
        let red = Number(rgba[0]);
        let green = Number(rgba[1]);
        let blue = Number(rgba[2]);
        let opacity = Number(rgba[3]);
        if (mode == 0) {            // Change red
            red = value;
            document.getElementById(color).style.backgroundColor = "rgba(" + red + ", " + green + ", " + blue + ", " + opacity + ")";
        } 
        else if (mode == 1) {       // Change green
            green = value;
            document.getElementById(color).style.backgroundColor = "rgba(" + red + ", " + green + ", " + blue + ", " + opacity + ")";
        }
        else if (mode == 2) {       // Change blue
            blue = value;
            document.getElementById(color).style.backgroundColor = "rgba(" + red + ", " + green + ", " + blue + ", " + opacity + ")";
        }
        else if (mode == 3) {       //Change opacity
            opacity = value;
            document.getElementById(color).style.backgroundColor = "rgba(" + red + ", " + green + ", " + blue + ", " + opacity + ")";
        }
    }
    else {
        rgba = rgba.substring(4, rgba.length - 1).replace(/ /g, '').split(',');
        let red = Number(rgba[0]);
        let green = Number(rgba[1]);
        let blue = Number(rgba[2]);
        let opacity = Number(rgba[3]);
        if (mode == 0) {            // Change red
            red = value;
            document.getElementById(color).style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
        } 
        else if (mode == 1) {       // Change green
            green = value;
            document.getElementById(color).style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
        }
        else if (mode == 2) {       // Change blue
            blue = value;
            document.getElementById(color).style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
        }
        else if (mode == 3) {       //Change opacity
            opacity = value;
            document.getElementById(color).style.backgroundColor = "rgba(" + red + ", " + green + ", " + blue + ", " + opacity + ")";
        }
    }
}

function buyFirstOpacityGen() {
    document.getElementById("opacityGenSecond").style.display = "";
    document.getElementById("opacityGenFirst").style.display = x;
    setInterval(OpacityTimer, 100);
    setInterval(opacitySecCheck);
    setInterval(opacityTotalCheck2);
    setInterval(opacityTotalCheck3);
    setInterval(opacityTotalCheck4);
    setInterval(opacityTotalCheck5);
    setInterval(forRedCheck);
    setInterval(forMenuCheck);

    gen1[4] = 1;
}

function buy(arr, money, toHTML) {
    let costNext = arr[1] * (arr[2] ** arr[4]);
    if (money >= costNext) {
        money -= costNext;
        arr[4] += 1;
        document.getElementById(toHTML).innerHTML = Number(arr[1] * (arr[2] ** arr[4])).toFixed(3);
    }
    return money;
}



function MoneyTimer(money, productionTotal) {
    money += (productionTotal / 10);
    return money;
}

function opacitySecGens(arr) {
    let final = arr[4] * arr[3];
    return final;
}

function OpacityTimer() {
    OpacitySecGen1 = Number(opacitySecGens(gen1).toFixed(3));
    OpacitySecGen2 = Number(opacitySecGens(gen2).toFixed(3));
    OpacitySecGen3 = Number(opacitySecGens(gen3).toFixed(3));
    OpacitySecGen4 = Number(opacitySecGens(gen4).toFixed(3));
    OpacitySecGen5 = Number(opacitySecGens(gen5).toFixed(3));
    multipliers = 2 ** (red + blue + green);
    opacitySec = (Number(OpacitySecGen1 + OpacitySecGen2 + OpacitySecGen3 + OpacitySecGen4 + OpacitySecGen5) * multipliers).toFixed(3);
    opacity = MoneyTimer(opacity, opacitySec);
    opacityTotal = MoneyTimer(opacityTotal, opacitySec);
    opacityToHTML = Number(opacity.toFixed(3));
    if (opacity >= 1) {changeRgba("mainColorRed", 3, 1);}
    else {changeRgba("mainColorRed", 3, opacity);}
    document.getElementById("opacitytext").innerHTML = "Opacity " + opacityToHTML;
    document.getElementById("opacitySectext").innerHTML = "Opacity/sec " + opacitySec;
    document.getElementById("opacitySecGen1").innerHTML = OpacitySecGen1;
    document.getElementById("opacitySecGen2").innerHTML = OpacitySecGen2;
    document.getElementById("opacitySecGen3").innerHTML = OpacitySecGen3;
    document.getElementById("opacitySecGen4").innerHTML = OpacitySecGen4;
    document.getElementById("opacitySecGen5").innerHTML = OpacitySecGen5;
    if (opacity < 10) {
        document.getElementById("gainbutton").innerHTML = "Gain 0 red";
    }
    else {
        document.getElementById("gainbutton").innerHTML = "Gain " + Math.log10(opacity).toFixedNoRound(0) + " red";
    }
}

function opacitySecCheck() {
    if (opacitySec != 0) {
        document.getElementById("opacitySectext").style.visibility = "";
        clearInterval(opacitySecCheck);
    }
}

function opacityTotalCheck2() {
    if (opacityTotal >= 0.060) {
        document.getElementById("opacityGen2").style.visibility = "";
        clearInterval(opacityTotalCheck2);
    }
}
function opacityTotalCheck3() {
    if (opacityTotal >= 0.720) {
        document.getElementById("opacityGen3").style.visibility = "";
        clearInterval(opacityTotalCheck3);
    }
}
function opacityTotalCheck4() {
    if (opacityTotal >= 8.640) {
        document.getElementById("opacityGen4").style.visibility = "";
        clearInterval(opacityTotalCheck4);
    }
}
function opacityTotalCheck5() {
    if (opacityTotal >= 103.680) {
        document.getElementById("opacityGen5").style.visibility = "";
        clearInterval(opacityTotalCheck5);
    }
}

function forRedCheck() {
    if (opacity >= 10) {
        document.getElementById("gainbutton").style.visibility = "";
        clearInterval(forRedCheck);
    }
}

function forMenuCheck() {
    if (red >= 255) {
        document.getElementById("backbutton").style.visibility = "";
        clearInterval(forMenuCheck);
    }
}

function gainRed() {
    if (opacity >= 10){
        debugger
        red += Math.log10(opacity).toFixedNoRound(0);
        changeRgba("mainColorRed", 3, opacity);
        changeRgba("mainColorRed", 0, red);
        reset()
    }
}

Number.prototype.toFixedNoRound = function (precition = 1) {
    let factor = Math.pow(10, precition);
    return Math.floor(this * factor) / factor;
}