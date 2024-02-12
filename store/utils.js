
export const POTENCIA_WALLBOX = 7;
export const POTENCIA_PORTABLE = 2.2;
export const URL_API = "https://apipay.energica.city";
export const TIME_OFFLINE = 10;
export const typeOfName = {
    [""]: "",
    ["on"]: "Cargando",
    ["off"]: "Disponible",
    ["offline"]: "Offline",
    ["habilitado"]: "habilitado",
    // ["disponible"]: "Disponible",
    ["finish"]: "Carga finalizada",
};

export const cleanStore = () => sessionStorage.clear();