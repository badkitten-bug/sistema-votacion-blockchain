import { Institution } from '../entities/institution.entity';

/**
 * Contrato de persistencia definido por el DOMINIO.
 * La infraestructura (capa externa) lo implementará; el dominio
 * nunca sabe si detrás hay memoria, SQLite o PostgreSQL.
 */
export interface InstitutionRepository {
  save(institution: Institution): Promise<void>;
  findById(id: string): Promise<Institution | null>;
  findAll(): Promise<Institution[]>;
}

/** Token para la inyección de dependencias en la capa externa. */
export const INSTITUTION_REPOSITORY = Symbol('InstitutionRepository');
