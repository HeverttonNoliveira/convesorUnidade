function converter() {
    const quant = parseFloat(document.querySelector("#quant").value);

    const unidad1 = document.querySelector("#unidade1").value;
    const unidad2 = document.querySelector("#unidade2").value;

    let resultado;
    let conversor = unidad1 + "-" + unidad2;

    switch (conversor) {
        case "m-m":
            resultado = quant;
            break;
        case "m-cm":
            resultado = quant * 100;
            break;
        case "m-ml":
            resultado = quant * 1000;
            break;
        case "m-km":
            resultado = quant / 1000;
            break;
        case "cm-m":
            resultado = quant / 100;
            break;
        case "cm-cm":
            resultado = quant;
            break;
        case "cm-ml":
            resultado = quant * 10;
            break;
        case "cm-km":
            resultado = quant / 100000;
            break;
        case "ml-m":
            resultado = quant / 1000;
            break;
        case "ml-cm":
            resultado = quant / 10;
            break;
        case "ml-ml":
            resultado = quant;
            break;
        case "ml-km":
            resultado = quant / 1000000;
            break;
        case "km-m":
            resultado = quant * 1000;
            break;
        case "km-cm":
            resultado = quant * 100000;
            break;
        case "km-ml":
            resultado = quant * 1000000;
            break;
        case "km-km":
            resultado = quant;
            break;
    }

    document.querySelector(".resp").innerHTML = quant + " " + unidad1 + " é igual a " + resultado + " " + unidad2 + ".";
}
