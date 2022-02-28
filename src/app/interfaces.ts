
export interface Skills{
    id?:number;//cuando creamos podria no venir
    porcentje: number;
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