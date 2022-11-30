var x = "none"
var y = "hidden"


document.getElementById("statsred").style.display = x;
document.getElementById("redcolorsstat").style.display = x;
document.getElementById("bluecolorsstat").style.display = x;
document.getElementById("greencolorsstat").style.display = x;
document.getElementById("redcolorsbutton1").style.display = x;
document.getElementById("redcolorsbutton2").style.display = x;
document.getElementById("bluecolorsbuttons").style.display = x;
document.getElementById("greencolorsbuttons").style.display = x;
document.getElementById("menu_green").style.display = x;
document.getElementById("menu_blue").style.display = x;
document.getElementById("gradientsection").style.display = x;
document.getElementById("opacityGenSecond").style.display = x;
document.getElementById("autobuyerRedGen0Div").style.display = x;
document.getElementById("autobuyerRedGen1Div").style.display = x;
document.getElementById("autobuyerRedGen2Div").style.display = x;
document.getElementById("autobuyerRedGen3Div").style.display = x;
document.getElementById("autobuyerRedGen4Div").style.display = x;
document.getElementById("autobuyerRedGen5Div").style.display = x;
document.getElementById("mainColorRed").style.background = "rgba(0, 0, 0, 0)";
document.getElementById("gainbutton").style.visibility = y;
document.getElementById("backbutton").style.visibility = y;
document.getElementById("opacitySectext").style.visibility = y;
document.getElementById("opacityGen2").style.visibility = y;
document.getElementById("opacityGen3").style.visibility = y;
document.getElementById("opacityGen4").style.visibility = y;
document.getElementById("opacityGen5").style.visibility = y;
document.getElementById("redCount").style.visibility = y;



var opacity = 0;
var opacityTotal = 0;
var opacitySec = 0;
var opacityToHTML = 0;
var red = 0;
var blue = 0;
var greenUnlocked = 0;
var green = 0;

var OpacitySecGen1 = 0;
var OpacitySecGen2 = 0;
var OpacitySecGen3 = 0;
var OpacitySecGen4 = 0;
var OpacitySecGen5 = 0;

//costNext = costBase * (rateGrowth) ^ owned
//productionTotal = (productionBase * owned) * multipliers

//arr = [type, costBase, rateGrowth, productionBase, owned]

var gen1 = ["opacity", 0.003738, 1.07, 0.00167, 0];
var gen2 = ["opacity", 0.060, 1.15, 0.020, 0];
var gen3 = ["opacity", 0.720, 1.14, 0.090, 0];
var gen4 = ["opacity", 8.640, 1.13, 0.360, 0];
var gen5 = ["opacity", 103.680, 1.12, 2.160, 0];

var autobuyer1 = ["red", 2, 1, 1, 0];
var autobuyer2 = ["red", 4, 1, 1, 0];
var autobuyer3 = ["red", 8, 1, 1, 0];
var autobuyer4 = ["red", 16, 1, 1, 0];
var autobuyer5 = ["red", 32, 1, 1, 0];

var opacityTimerVar = 0;
var opacitySecCheckVar = 0;
var opacityTotalCheck2Var = 0;
var opacityTotalCheck3Var = 0;
var opacityTotalCheck4Var = 0;
var opacityTotalCheck5Var = 0;
var forRedCheckVar = 0;
var forMenuCheckVar = 0;
var forAutobuyersVar = 0;
var forRedCountMultiCheckVar = 0;
var redOpacityAutobuyerVar = 0;

var autoSave = setInterval(save, 300000);

if (gen1[4] > 0) {    
    document.getElementById("opacityGenSecond").style.display = "";
    document.getElementById("opacityGenFirst").style.display = x;
    if (document.getElementById("redAutobuyerCheckbox0").checked == true) {
        document.getElementById("redAutobuyerCheckbox1").checked = true
        document.getElementById("redAutobuyerCheckbox0").checked = false
    }
}

if (localStorage.getItem("opacity") != null) {load();}

function hardReset() {
    if (confirm("Are you sure? This will start the game from scratch") === true) {
        document.getElementById("statsred").style.display = x;
        document.getElementById("redcolorsstat").style.display = x;
        document.getElementById("bluecolorsstat").style.display = x;
        document.getElementById("greencolorsstat").style.display = x;
        document.getElementById("redcolorsbutton1").style.display = x;
        document.getElementById("redcolorsbutton2").style.display = x;
        document.getElementById("bluecolorsbuttons").style.display = x;
        document.getElementById("greencolorsbuttons").style.display = x;
        document.getElementById("menu_green").style.display = x;
        document.getElementById("menu_blue").style.display = x;
        document.getElementById("gradientsection").style.display = x;
        document.getElementById("opacityGenSecond").style.display = x;
        document.getElementById("autobuyerRedGen0Div").style.display = x;
        document.getElementById("autobuyerRedGen1Div").style.display = x;
        document.getElementById("autobuyerRedGen2Div").style.display = x;
        document.getElementById("autobuyerRedGen3Div").style.display = x;
        document.getElementById("autobuyerRedGen4Div").style.display = x;
        document.getElementById("autobuyerRedGen5Div").style.display = x;
        document.getElementById("mainColorRed").style.background = "rgba(0, 0, 0, 0)";
        document.getElementById("gainbutton").style.visibility = y;
        document.getElementById("backbutton").style.visibility = y;
        document.getElementById("opacitySectext").style.visibility = y;
        document.getElementById("opacityGen2").style.visibility = y;
        document.getElementById("opacityGen3").style.visibility = y;
        document.getElementById("opacityGen4").style.visibility = y;
        document.getElementById("opacityGen5").style.visibility = y;
        document.getElementById("redCount").style.visibility = y;

        opacity = 0;
        opacityTotal = 0;
        opacitySec = 0;
        opacityToHTML = 0;
        red = 0;
        blue = 0;
        greenUnlocked = 0;
        green = 0;
        OpacitySecGen1 = 0;
        OpacitySecGen2 = 0;
        OpacitySecGen3 = 0;
        OpacitySecGen4 = 0;
        OpacitySecGen5 = 0;

        gen1 = ["opacity", 0.003738, 1.07, 0.00167, 0];
        gen2 = ["opacity", 0.060, 1.15, 0.020, 0];
        gen3 = ["opacity", 0.720, 1.14, 0.090, 0];
        gen4 = ["opacity", 8.640, 1.13, 0.360, 0];
        gen5 = ["opacity", 103.680, 1.12, 2.160, 0];

        autobuyer1 = ["red", 2, 1, 1, 0];
        autobuyer2 = ["red", 4, 1, 1, 0];
        autobuyer3 = ["red", 8, 1, 1, 0];
        autobuyer4 = ["red", 16, 1, 1, 0];
        autobuyer5 = ["red", 32, 1, 1, 0];

        document.getElementById("Gen1").innerHTML = Number(gen1[1] * (gen1[2] ** gen1[4])).toFixed(3);
        document.getElementById("Gen2").innerHTML = Number(gen2[1] * (gen2[2] ** gen2[4])).toFixed(3);
        document.getElementById("Gen3").innerHTML = Number(gen3[1] * (gen3[2] ** gen3[4])).toFixed(3);
        document.getElementById("Gen4").innerHTML = Number(gen4[1] * (gen4[2] ** gen4[4])).toFixed(3);
        document.getElementById("Gen5").innerHTML = Number(gen5[1] * (gen5[2] ** gen5[4])).toFixed(3);

        document.getElementById("opacityGenSecond").style.display = x;
        document.getElementById("opacityGenFirst").style.display = "";
        document.getElementById("redCount").innerHTML = "Color: " + Number(red);                        /* Change color to red QWE*/
        document.getElementById("redCountMenu").innerHTML = "Color: " + Number(red);                      /* ChangeX color to red QWE*/
        clearInterval(opacityTimerVar);
        opacityTimerVar = null;
        opacityTimer()
    }
}

function save() {
    localStorage.setItem("opacity", opacity);
    localStorage.setItem("opacityTotal", opacityTotal);
    localStorage.setItem("opacitySec", opacitySec);
    localStorage.setItem("opacityToHTML", opacityToHTML);
    localStorage.setItem("red", red);
    localStorage.setItem("blue", blue);
    localStorage.setItem("greenUnlocked", greenUnlocked);
    localStorage.setItem("green", green);
    localStorage.setItem("OpacitySecGen1", OpacitySecGen1);
    localStorage.setItem("OpacitySecGen2", OpacitySecGen2);
    localStorage.setItem("OpacitySecGen3", OpacitySecGen3);
    localStorage.setItem("OpacitySecGen4", OpacitySecGen4);
    localStorage.setItem("OpacitySecGen5", OpacitySecGen5);

    localStorage.setItem("bgColorRed", document.getElementById("mainColorRed").style.backgroundColor);

    localStorage.setItem("gen1", JSON.stringify(gen1));
    localStorage.setItem("gen2", JSON.stringify(gen2));
    localStorage.setItem("gen3", JSON.stringify(gen3));
    localStorage.setItem("gen4", JSON.stringify(gen4));
    localStorage.setItem("gen5", JSON.stringify(gen5));

    localStorage.setItem("autobuyer1", JSON.stringify(autobuyer1));
    localStorage.setItem("autobuyer2", JSON.stringify(autobuyer2));
    localStorage.setItem("autobuyer3", JSON.stringify(autobuyer3));
    localStorage.setItem("autobuyer4", JSON.stringify(autobuyer4));
    localStorage.setItem("autobuyer5", JSON.stringify(autobuyer5));
}

function load(){
    if (localStorage.getItem("gen3") == null) {
           alert("There is no save found") 
    }
    else {
        clearInterval(opacityTimerVar);
        opacityTimerVar = null;
        clearInterval(opacitySecCheckVar);
        opacitySecCheckVar = null;
        clearInterval(opacityTotalCheck2Var);
        opacityTotalCheck2Var = null;
        clearInterval(opacityTotalCheck3Var);
        opacityTotalCheck3Var = null;
        clearInterval(opacityTotalCheck4Var);
        opacityTotalCheck4Var = null;
        clearInterval(opacityTotalCheck5Var);
        opacityTotalCheck5Var = null;
        clearInterval(forRedCheckVar);
        forRedCheckVar = null;
        clearInterval(forMenuCheckVar);
        forMenuCheckVar = null;
        clearInterval(forAutobuyersVar);
        forAutobuyersVar = null;
        clearInterval(redOpacityAutobuyerVar);
        redOpacityAutobuyerVar = null;


        document.getElementById("statsred").style.display = x;
        document.getElementById("redcolorsstat").style.display = x;
        document.getElementById("bluecolorsstat").style.display = x;
        document.getElementById("greencolorsstat").style.display = x;
        document.getElementById("redcolorsbutton1").style.display = x;
        document.getElementById("redcolorsbutton2").style.display = x;
        document.getElementById("bluecolorsbuttons").style.display = x;
        document.getElementById("greencolorsbuttons").style.display = x;
        document.getElementById("menu_green").style.display = x;
        document.getElementById("menu_blue").style.display = x;
        document.getElementById("gradientsection").style.display = x;
        
        document.getElementById("gainbutton").style.visibility = y;
        document.getElementById("backbutton").style.visibility = y;
        document.getElementById("mainColorRed").style.background = "rgba(0, 0, 0, 0)";
        document.getElementById("opacitySectext").style.visibility = y;
        document.getElementById("opacityGen2").style.visibility = y;
        document.getElementById("opacityGen3").style.visibility = y;
        document.getElementById("opacityGen4").style.visibility = y;
        document.getElementById("opacityGen5").style.visibility = y;

        opacity = Number(localStorage.getItem("opacity"));
        opacityTotal = Number(localStorage.getItem("opacityTotal"));
        opacitySec = Number(localStorage.getItem("opacitySec"));
        opacityToHTML = Number(localStorage.getItem("opacityToHTML"));
        red = Number(localStorage.getItem("red"));
        blue = Number(localStorage.getItem("blue"));
        greenUnlocked = Number(localStorage.getItem("greenUnlocked"));
        green = Number(localStorage.getItem("green"));
        OpacitySecGen1 = Number(localStorage.getItem("OpacitySecGen1"));
        OpacitySecGen2 = Number(localStorage.getItem("OpacitySecGen2"));
        OpacitySecGen3 = Number(localStorage.getItem("OpacitySecGen3"));
        OpacitySecGen4 = Number(localStorage.getItem("OpacitySecGen4"));
        OpacitySecGen5 = Number(localStorage.getItem("OpacitySecGen5"));

        gen1 = JSON.parse(localStorage.getItem("gen1"));
        gen2 = JSON.parse(localStorage.getItem("gen2"));
        gen3 = JSON.parse(localStorage.getItem("gen3"));
        gen4 = JSON.parse(localStorage.getItem("gen4"));
        gen5 = JSON.parse(localStorage.getItem("gen5"));

        autobuyer1 = JSON.parse(localStorage.getItem("autobuyer1"));
        autobuyer2 = JSON.parse(localStorage.getItem("autobuyer2"));
        autobuyer3 = JSON.parse(localStorage.getItem("autobuyer3"));
        autobuyer4 = JSON.parse(localStorage.getItem("autobuyer4"));
        autobuyer5 = JSON.parse(localStorage.getItem("autobuyer5"));

        opacityTimerVar = setInterval(opacityTimer, 100);
        opacitySecCheckVar = setInterval(opacitySecCheck);
        opacityTotalCheck2Var = setInterval(opacityTotalCheck2);
        opacityTotalCheck3Var = setInterval(opacityTotalCheck3);
        opacityTotalCheck4Var = setInterval(opacityTotalCheck4);
        opacityTotalCheck5Var = setInterval(opacityTotalCheck5);
        forRedCheckVar = setInterval(forRedCheck);
        forMenuCheckVar = setInterval(forMenuCheck);
        forAutobuyersVar = setInterval(forAutobuyers);
        forRedCountMultiCheckVar = setInterval(forRedCountMultiCheck);
        redOpacityAutobuyerVar = setInterval(redOpacityAutobuyer, 1000);

        document.getElementById("Gen1").innerHTML = Number(gen1[1] * (gen1[2] ** gen1[4])).toFixed(3);
        document.getElementById("Gen2").innerHTML = Number(gen2[1] * (gen2[2] ** gen2[4])).toFixed(3);
        document.getElementById("Gen3").innerHTML = Number(gen3[1] * (gen3[2] ** gen3[4])).toFixed(3);
        document.getElementById("Gen4").innerHTML = Number(gen4[1] * (gen4[2] ** gen4[4])).toFixed(3);
        document.getElementById("Gen5").innerHTML = Number(gen5[1] * (gen5[2] ** gen5[4])).toFixed(3);

        document.getElementById("mainColorRed").style.backgroundColor = localStorage.getItem("bgColorRed");

        document.getElementById("redCount").innerHTML = "Color: " + Number(red);                        /* Change color to red QWE*/
        document.getElementById("redCountMenu").innerHTML = "Color: " + Number(red);                      /* ChangeX color to red QWE*/
        if (gen1[4] > 0) {    
            document.getElementById("opacityGenSecond").style.display = "";
            document.getElementById("opacityGenFirst").style.display = x;
            if (document.getElementById("redAutobuyerCheckbox0").checked == true) {
                document.getElementById("redAutobuyerCheckbox1").checked = true
                document.getElementById("redAutobuyerCheckbox0").checked = false
            }
        }
        opacityTimer();

        if (opacitySec == 0) {
            clearInterval(opacityTimerVar);
            opacityTimerVar = null;
        }
    }
}

function closingCode() {
    if (confirm("You have closed the window, would you like to save?") === true) {
      save();
      return null;
    }
  }

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

    if (document.getElementById("redAutobuyerCheckbox1").checked == true) {
        document.getElementById("redAutobuyerCheckbox0").checked = true
        document.getElementById("redAutobuyerCheckbox1").checked = false
    }

    clearInterval(opacityTimerVar);
    opacityTimerVar = null;

    document.getElementById("Gen1").innerHTML = Number(gen1[1] * (gen1[2] ** gen1[4])).toFixed(3);
    document.getElementById("Gen2").innerHTML = Number(gen2[1] * (gen2[2] ** gen2[4])).toFixed(3);
    document.getElementById("Gen3").innerHTML = Number(gen3[1] * (gen3[2] ** gen3[4])).toFixed(3);
    document.getElementById("Gen4").innerHTML = Number(gen4[1] * (gen4[2] ** gen4[4])).toFixed(3);
    document.getElementById("Gen5").innerHTML = Number(gen5[1] * (gen5[2] ** gen5[4])).toFixed(3);

    document.getElementById("redCount").innerHTML = "Color: " + Number(red);                        /* Change color to red QWE*/
    document.getElementById("redCountMenu").innerHTML = "Color: " + Number(red);                      /* ChangeX color to red QWE*/

    opacityTimer();
    if (red >= 100) {buyFirstOpacityGen()}
}

function changeRgba(color, mode, value) {
    let rgba = document.getElementById(color).style.backgroundColor;
    if (rgba.includes("rgba")) {
        rgba = rgba.substring(5, rgba.length - 1).replace(/ /g, '').split(',');
        let red = Number(rgba[0]);
        let green = Number(rgba[1]);
        let blue = Number(rgba[2]);
        let opacity = Number(rgba[3]);
        if (mode == 0) {            // Change red
            red += value;
            document.getElementById(color).style.backgroundColor = "rgba(" + red + ", " + green + ", " + blue + ", " + opacity + ")";
        } 
        else if (mode == 1) {       // Change green
            green += value;
            document.getElementById(color).style.backgroundColor = "rgba(" + red + ", " + green + ", " + blue + ", " + opacity + ")";
        }
        else if (mode == 2) {       // Change blue
            blue += value;
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
            red += value;
            document.getElementById(color).style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
        } 
        else if (mode == 1) {       // Change green
            green += value;
            document.getElementById(color).style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
        }
        else if (mode == 2) {       // Change blue
            blue += value;
            document.getElementById(color).style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
        }
        else if (mode == 3) {       //Change opacity
            opacity += value;
            document.getElementById(color).style.backgroundColor = "rgba(" + red + ", " + green + ", " + blue + ", " + opacity + ")";
        }
    }
}

function buyFirstOpacityGen() {
    document.getElementById("opacityGenSecond").style.display = "";
    document.getElementById("opacityGenFirst").style.display = x;
    if (document.getElementById("redAutobuyerCheckbox0").checked == true) {
        document.getElementById("redAutobuyerCheckbox1").checked = true
        document.getElementById("redAutobuyerCheckbox0").checked = false
    }
    opacityTimerVar = setInterval(opacityTimer, 100);
    opacitySecCheckVar = setInterval(opacitySecCheck);
    opacityTotalCheck2Var = setInterval(opacityTotalCheck2);
    opacityTotalCheck3Var = setInterval(opacityTotalCheck3);
    opacityTotalCheck4Var = setInterval(opacityTotalCheck4);
    opacityTotalCheck5Var = setInterval(opacityTotalCheck5);
    forRedCheckVar = setInterval(forRedCheck);
    forMenuCheckVar = setInterval(forMenuCheck);
    forAutobuyersVar = setInterval(forAutobuyers);
    redOpacityAutobuyerVar = setInterval(redOpacityAutobuyer, 1000);

    gen1[4] = 1;
}

function buy(arr, money, toHTML) {
    let costNext = arr[1] * (arr[2] ** arr[4]);
    if (money >= costNext) {
        money -= costNext;
        arr[4] += 1;
        document.getElementById(toHTML).innerHTML = Math.round(arr[1] * (arr[2] ** arr[4]) * 1000) / 1000;
    }
    return money;
}

function MoneyTimer(money, productionTotal) {
    money += (productionTotal / 10);
    return money;
}

function opacitySecGens(arr) {
    let final = arr[4] * arr[3] * (2 ** Math.floor(arr[4] / 25));
    return final;
}

function opacityTimer() {
    console.log("check")
    OpacitySecGen1 = Number(opacitySecGens(gen1).toFixed(3));
    OpacitySecGen2 = Number(opacitySecGens(gen2).toFixed(3));
    OpacitySecGen3 = Number(opacitySecGens(gen3).toFixed(3));
    OpacitySecGen4 = Number(opacitySecGens(gen4).toFixed(3));
    OpacitySecGen5 = Number(opacitySecGens(gen5).toFixed(3));
    multipliers = ((red + 1) * (blue + 1)) * (green + 1);
    opacitySec = Math.round(Number(OpacitySecGen1 + OpacitySecGen2 + OpacitySecGen3 + OpacitySecGen4 + OpacitySecGen5) * multipliers * 1000) / 1000;
    opacity = MoneyTimer(opacity, opacitySec);
    opacityTotal = MoneyTimer(opacityTotal, opacitySec);
    opacityToHTML = Number(opacity.toFixed(3));
    if (opacity >= 1) {changeRgba("mainColorRed", 3, 1);}
    else {changeRgba("mainColorRed", 3, opacity);}
    document.getElementById("opacitytext").innerHTML = "Opacity " + opacityToHTML;
    document.getElementById("opacitymenu").innerHTML = opacityToHTML.toFixed(0);
    document.getElementById("opacitySectext").innerHTML = "Opacity/sec " + opacitySec;
    document.getElementById("opacitySecMenu").innerHTML = opacitySec.toFixed(0);
    document.getElementById("opacitySecGen1").innerHTML = Math.round(OpacitySecGen1 * multipliers * 1000) / 1000;
    document.getElementById("opacitySecGen2").innerHTML = Math.round(OpacitySecGen2 * multipliers * 1000) / 1000;
    document.getElementById("opacitySecGen3").innerHTML = Math.round(OpacitySecGen3 * multipliers * 1000) / 1000;
    document.getElementById("opacitySecGen4").innerHTML = Math.round(OpacitySecGen4 * multipliers * 1000) / 1000;
    document.getElementById("opacitySecGen5").innerHTML = Math.round(OpacitySecGen5 * multipliers * 1000) / 1000;
    if (opacity < 10) {
        document.getElementById("gainbutton").innerHTML = "Gain 0 red";
    }
    else {
        document.getElementById("gainbutton").innerHTML = "Gain " + toFixedNoRound(Math.log10(opacity)) + " color";                       /* Change red to color QWE*/
    }
    if (opacity < 10) {
        document.getElementById("gain_menu_red").innerHTML = "Gain 0 red";
    }
    else {
        document.getElementById("gain_menu_red").innerHTML = "Gain " + toFixedNoRound(Math.log10(opacity)) + " color";                    /* Change red to color QWE*/
    }

    if (document.getElementById("mainColorRed").style.backgroundColor == "rgb(255, 255, 255)") { 
        clearInterval(opacityTimerVar);
        opacityTimerVar = null;
        clearInterval(opacitySecCheckVar);
        opacitySecCheckVar = null;
        clearInterval(opacityTotalCheck2Var);
        opacityTotalCheck2Var = null;
        clearInterval(opacityTotalCheck3Var);
        opacityTotalCheck3Var = null;
        clearInterval(opacityTotalCheck4Var);
        opacityTotalCheck4Var = null;
        clearInterval(opacityTotalCheck5Var);
        opacityTotalCheck5Var = null;
        clearInterval(forRedCheckVar);
        forRedCheckVar = null;
        clearInterval(forMenuCheckVar);
        forMenuCheckVar = null;
        clearInterval(forAutobuyersVar);
        forAutobuyersVar = null;
        clearInterval(redOpacityAutobuyerVar);
        redOpacityAutobuyerVar = null;

        tomenu(0);
        document.getElementById("forwin0").style.display = x;
        document.getElementById("forwin1").style.display = x;
        document.getElementById("forwin2").style.backgroundColor = "black";
        
        document.getElementById("win").style.display = "flex";
     } /*QWE*/
}

function opacitySecCheck() {
    if (opacitySec != 0) {
        document.getElementById("opacitySectext").style.visibility = "";
        clearInterval(opacitySecCheckVar);
        opacitySecCheckVar = null;
    }
}

function opacityTotalCheck2() {
    if (opacityTotal >= 0.060) {
        document.getElementById("opacityGen2").style.visibility = "";
        clearInterval(opacityTotalCheck2Var);
        opacityTotalCheck2Var = null;
    }
}
function opacityTotalCheck3() {
    if (opacityTotal >= 0.720) {
        document.getElementById("opacityGen3").style.visibility = "";
        clearInterval(opacityTotalCheck3Var);
        opacityTotalCheck3Var = null;
    }
}
function opacityTotalCheck4() {
    if (opacityTotal >= 8.640) {
        document.getElementById("opacityGen4").style.visibility = "";
        clearInterval(opacityTotalCheck4Var);
        opacityTotalCheck4Var = null;
    }
}
function opacityTotalCheck5() {
    if (opacityTotal >= 103.680) {
        document.getElementById("opacityGen5").style.visibility = "";
        clearInterval(opacityTotalCheck5Var);
        opacityTotalCheck5Var = null;
    }
}

function forRedCheck() {
    if (opacity >= 10) {
        document.getElementById("gainbutton").style.visibility = "";
        clearInterval(forRedCheckVar);
        forRedCheckVar = null;
    }
}

function forMenuCheck() {
    if (red >= 255) {
        document.getElementById("backbutton").style.visibility = "";
        clearInterval(forMenuCheckVar);
        forMenuCheckVar = null;
    }
}

function forAutobuyers() {
    if (red >= 10) {
        document.getElementById("autobuyerRedGen0Div").style.display = "";
        document.getElementById("autobuyerRedGen1Div").style.display = "";
        document.getElementById("autobuyerRedGen2Div").style.display = "";
        document.getElementById("autobuyerRedGen3Div").style.display = "";
        document.getElementById("autobuyerRedGen4Div").style.display = "";
        document.getElementById("autobuyerRedGen5Div").style.display = "";
        clearInterval(forAutobuyersVar);
        forAutobuyersVar = null;
    }
}

function gainRed() {
    if (opacity >= 10){
        red += toFixedNoRound(Math.log10(opacity));
        changeRgba("mainColorRed", 3, opacity);
        changeRgba("mainColorRed", getRandomInt(3), toFixedNoRound(Math.log10(opacity)));                   /* changeRgba("mainColorRed", 0, red); QWE*/
        reset()
    }
}

function forRedCountMultiCheck() {
    if (red > 0) {
        document.getElementById("redCount").style.visibility = "";
        clearInterval(forRedCountMultiCheckVar);
        forRedCountMultiCheckVar = null;
    }
}

function tomenu(mode) {
    if (mode == 0) {
        document.getElementById("upgradesandstats").style.display = x;
        document.getElementById("gainbutton1").style.display = x;
        document.getElementById("backbutton").style.display = x;
        document.getElementById("redCount").style.display = x;

        document.getElementById("statsred").style.display = "";
        document.getElementById("redcolorsstat").style.display = "";
        document.getElementById("bluecolorsstat").style.display = "";
        document.getElementById("greencolorsstat").style.display = "";
        document.getElementById("redcolorsbutton1").style.display = "";
        document.getElementById("redcolorsbutton2").style.display = "";
        document.getElementById("bluecolorsbuttons").style.display = "";
        document.getElementById("greencolorsbuttons").style.display = "";
        if (greenUnlocked == 1) {document.getElementById("menu_green").style.display = "";}
        document.getElementById("menu_blue").style.display = x; /* BLUE BLUE BLUE BLUE BLUE BLUE BLUE BLUE BLUE BLUE BLUE BLUE BLUE BLUE BLUE BLUE BLUE BLUE BLUE BLUE QWE*/

        document.getElementById("menu_red").style.display = "grid";
    }
}

function goback(mode) {
    if (mode == 0) {
        document.getElementById("upgradesandstats").style.display = "";
        document.getElementById("gainbutton1").style.display = "";
        document.getElementById("backbutton").style.display = "";
        document.getElementById("redCount").style.display = "";

        document.getElementById("statsred").style.display = x;
        document.getElementById("redcolorsstat").style.display = x;
        document.getElementById("bluecolorsstat").style.display = x;
        document.getElementById("greencolorsstat").style.display = x;
        document.getElementById("redcolorsbutton1").style.display = x;
        document.getElementById("redcolorsbutton2").style.display = x;
        document.getElementById("bluecolorsbuttons").style.display = x;
        document.getElementById("greencolorsbuttons").style.display = x;
        document.getElementById("menu_green").style.display = x;
        document.getElementById("menu_blue").style.display = x;

        document.getElementById("menu_red").style.display = "";
    }
}

function redOpacityAutobuyer() {
    if (document.getElementById("redAutobuyerCheckbox0").checked == true & autobuyer1[4] > 0) {
        buyFirstOpacityGen();
    }
    if (document.getElementById("redAutobuyerCheckbox1").checked == true & autobuyer1[4] > 0) {
        opacity = autobuy(autobuyer1, gen1, opacity, "Gen1", "redAutobuyerCheckbox1");
    }
    if (document.getElementById("redAutobuyerCheckbox2").checked == true & autobuyer2[4] > 0) {
        opacity = autobuy(autobuyer2, gen2, opacity, "Gen2", "redAutobuyerCheckbox2");
    }
    if (document.getElementById("redAutobuyerCheckbox3").checked == true & autobuyer3[4] > 0) {
        opacity = autobuy(autobuyer3, gen3, opacity, "Gen3", "redAutobuyerCheckbox3");
    }
    if (document.getElementById("redAutobuyerCheckbox4").checked == true & autobuyer4[4] > 0) {
        opacity = autobuy(autobuyer4, gen4, opacity, "Gen4", "redAutobuyerCheckbox4");
    }
    if (document.getElementById("redAutobuyerCheckbox5").checked == true & autobuyer5[4] > 0) {
        opacity = autobuy(autobuyer5, gen5, opacity, "Gen5", "redAutobuyerCheckbox5");
    }
}

function buyRedAutoBuyer(autobuyer, toHTML) {
    red = buy(autobuyer, red, toHTML);
    changeRgba("mainColorRed", getRandomInt(3), -(toFixedNoRound(Math.log10(opacity))));                   /* changeRgba("mainColorRed", 0, red); QWE*/
    document.getElementById("redCount").innerHTML = "Color: " + Number(red);                            /* Change color to red QWE*/
    document.getElementById("redCountMenu").innerHTML = "Color: " + Number(red);                        /* ChangeX color to red QWE*/
    if (autobuyer == autobuyer1) {
        return buy(autobuyer, red, "RedGen0");
    }
}

function autobuy(autobuyer, gen, money, toHTML, checkboxID) { /* autobuyer - array, money - currency used to autobuy */
	for (let i = 0; i < autobuyer[4]; i++) {
        return buy(gen, money, toHTML);
    }
}

function AutobyersCheckboxes(mode) {
    if (mode == 0) {
        if (document.getElementById("redAutobuyerCheckboxes").checked == true) {
            document.getElementById("redAutobuyerCheckbox1").checked = true
            document.getElementById("redAutobuyerCheckbox2").checked = true
            document.getElementById("redAutobuyerCheckbox3").checked = true
            document.getElementById("redAutobuyerCheckbox4").checked = true
            document.getElementById("redAutobuyerCheckbox5").checked = true
        }
        else {
            document.getElementById("redAutobuyerCheckbox1").checked = false
            document.getElementById("redAutobuyerCheckbox2").checked = false
            document.getElementById("redAutobuyerCheckbox3").checked = false
            document.getElementById("redAutobuyerCheckbox4").checked = false
            document.getElementById("redAutobuyerCheckbox5").checked = false
        }
    }
}

function toFixedNoRound(number, precition = 0) {
    let factor = Math.pow(10, precition);
    return Math.floor(number * factor) / factor;
}




/*QWE*/


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}