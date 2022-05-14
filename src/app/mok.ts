import {Study, Experience, Proyecto, Skills, Header} from './interfaces'

export const STUDY:Study = {
    "id":0,
    "institucion":"",
    "periodo":"",
    "titulo": "",
    "completo":false,
    "descripcion":"",
}

export const EXPERIENCIA:Experience ={
    "id":0,
    "periodo":"",
    "nombre":"",
    "puesto":"",
    "tareas":"",
    "tipo":"",
    "actual":true
}
export const PROYECTO:Proyecto ={
    "id":0,
    "nombre":"",
    "imagen":"",
    "enlace":"",
    "detalle":""
}
export const SKILL:Skills ={
    "id":0,
    "porcentaje":0,
    "titulo":"",
    "subtitulo":"",
    "color":"#000000"
}
export const HEADER:Header ={
    "id":0,
    "nombre":"",
    "apLogo":"",
    "apText":"",
    "lidin":"",
    "github":"",
    "twitter":"",
    "facebook":"",
    "email":"",
    "wahtsapp":""
}
