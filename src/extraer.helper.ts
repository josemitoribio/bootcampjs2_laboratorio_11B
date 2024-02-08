export const extraerCoincidenciasImg = (contenidoHTML: string): RegExpMatchArray | null => {
    const patron: RegExp = /<img[^>]+src\s*=\s*['"]([^'"]+)['"][^>]*>/g;
    return contenidoHTML.match(patron);
};

export const limpiarContenedorImagenes = (contenedor: HTMLElement): void => {
    contenedor.innerHTML = "";
};

export const extraerSrcImg = (coincidencia: string): string => {
    const coincidenciaSrc = coincidencia.match(/src\s*=\s*['"]([^'"]+)['"]/) as any;
    return coincidenciaSrc 
};

export const crearYAgregarImagen = (src: string, contenedor: HTMLElement): void => {
    const elementoImg: HTMLImageElement = document.createElement("img");
    elementoImg.src = src;
    contenedor.appendChild(elementoImg);
};