export interface Categoria {
    nombre:        string;
    listaAnuncios: any[];
    icono: string;
}

export interface LoginRespuesta {
    jwt_token?: string;
    timestamp?: Date;
    status?:    number;
    error?:     string;
    trace?:     string;
    message?:   string;
    path?:      string;
}

export interface Usuario {
    email: string;
    password: string;
    nombre?: string;
    apellidos?: string;
    telefono?: string;
    fechaNacimiento?: string;
    ubicacion?: string;
}
