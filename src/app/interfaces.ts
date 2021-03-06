
export interface Skills{
    id?:number;//cuando creamos podria no venir
    porcentaje: number;
    titulo:string;
    subtitulo:string;
    color:string;
}

export interface Study{
    id?:number;//cuando creamos podria no venir
    institucion:string;
    periodo:string;
    titulo: string;
    completo:boolean;
    descripcion:string;
}
export interface Experience{
    id?:number;
    periodo:string;
    nombre:string;
    puesto:string;
    tareas:string;
    tipo:string;
    actual:boolean;
}
export interface Persona{
    id?:number;
    nombre:string;
    apellido:string;
    banner:string;
    fperfil:string;
    titulo:string;
    about:string;
    wahtsapp:string;
    copy:string;
}
export interface Header {
    id?:number;
    nombre:string;
    apLogo:string;
    apText:string;
    lidin:string;
    github:string;
    twitter:string;
    facebook:string;
    email:string;
    wahtsapp:string;
}
export interface Proyecto{
    id?:number;
    nombre:string;
    imagen:String;
    enlace:String;
    detalle:String;
}

export interface User {
    id?:number;
    usuario: String;
    password:String;
    valido: boolean;
}

