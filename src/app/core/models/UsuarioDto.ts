import { CiudadDto } from "./CiudadDto";
import { EmpresaDto } from "./EmpresaDto";
import { RolesDto } from "./RolesDto";

export class UsuarioDto {

  id: number;
  nombre: string;
  edad: number;
  genero: string;
  email: string;
  contrasena: string;
  direccion: string;
  telefonoCelular: string;
  fechaNacimiento: Date;
  imagen: ArrayBuffer | string;
  rol: RolesDto;
  empresa: EmpresaDto;
  ciudad: CiudadDto;
  estado: string;
  google: Boolean
}
