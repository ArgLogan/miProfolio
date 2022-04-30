
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
export interface About{
    id?:number;
    nombre:string;
    apellido:string;
    banner:string;
    fPerfi:string;
    titulo:string;
    about:string;
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