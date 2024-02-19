import {
    extraerCoincidenciasImg,
    limpiarContenedorImagenes,
    extraerSrcImg,
    crearYAgregarImagen
} from "./extraer.helper"

const botonExtraer = document.getElementById("botonExtraer");
const textArea = document.getElementById("textArea");
const contenedorImagenes = document.getElementById("contenedorImagenes");

document.addEventListener("DOMContentLoaded", () => {
    if (botonExtraer !== null && botonExtraer !== undefined 
        && botonExtraer instanceof HTMLButtonElement) {
        botonExtraer.addEventListener("click", handlerClick);
    }
});

const handlerClick = () => {
    if (textArea !== null && textArea !== undefined && textArea instanceof HTMLTextAreaElement &&
        contenedorImagenes !== null && contenedorImagenes !== undefined) {

        const contenidoHTML = textArea.value;
        const coincidenciasImg: RegExpMatchArray = extraerCoincidenciasImg(contenidoHTML) as any;
        limpiarContenedorImagenes(contenedorImagenes);

        if (coincidenciasImg) {
            coincidenciasImg.forEach(coincidencia => {
                const srcImg: string = extraerSrcImg(coincidencia) as any;
                if (srcImg) {
                    crearYAgregarImagen(srcImg, contenedorImagenes);
                }
            });
        }
    }
};

