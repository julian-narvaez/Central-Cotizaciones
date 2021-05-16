import { RolesDto } from "./RolesDto";

export class EmpresaDto {

  id: number;
  nombre: string;
  email: string;
  camaraDeComercio: string;
  matriculaMercantil: string;
  ciudad: string;
  direccion: string;
  telefono: string;
  imagenCompañia: ArrayBuffer | string;
  rol: RolesDto;
  estado: string;

}
