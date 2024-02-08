import {extraerCoincidenciasImg,
limpiarContenedorImagenes,
extraerSrcImg,
crearYAgregarImagen} from "./extraer.helper"


const botonExtraer = document.getElementById("botonExtraer");
const inputHTML = document.getElementById("inputHTML");
const contenedorImagenes = document.getElementById("contenedorImagenes");

document.addEventListener("DOMContentLoaded", () => {
     if (botonExtraer !== null && botonExtraer !== undefined &&
        inputHTML !== null && inputHTML !== undefined && inputHTML instanceof HTMLInputElement &&
        contenedorImagenes !== null && contenedorImagenes !== undefined) {
        botonExtraer.addEventListener("click", () => {
            const contenidoHTML: string = inputHTML.value;
            const coincidenciasImg: RegExpMatchArray = extraerCoincidenciasImg(contenidoHTML) as any;
            limpiarContenedorImagenes(contenedorImagenes);

            if (coincidenciasImg) {
                coincidenciasImg.forEach(coincidencia => {
                    const srcImg: string= extraerSrcImg(coincidencia) as any;
                    if (srcImg) {
                    crearYAgregarImagen(srcImg, contenedorImagenes);
                    }
                });
            }
        });
    }
});


