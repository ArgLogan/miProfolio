import {Study, Experience, Proyecto, Skills, Header,Persona, User} from './interfaces'

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
export const PERSONA:Persona={
    "id": 0,
    "nombre":"Juan José",
    "apellido":"",
    "banner":"./assets/imgs/Banner.jpg",
    "fperfil":"./assets/imgs/banner2.png",
    "titulo":"",
    "about":"",
    "wahtsapp":"",
    "copy":""
}

export const USER:User={
    "id": 1,
    "usuario": "",
    "password": "",
    "valido": false
}