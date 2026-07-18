import { Certificate } from '../entities/certificate.entity';

export interface CertificateRepository {
  save(certificate: Certificate): Promise<void>;
  findByVerificationCode(code: string): Promise<Certificate | null>;
  findByHolderDocument(document: string): Promise<Certificate[]>;
}

/** Token para la inyección de dependencias en la capa externa. */
export const CERTIFICATE_REPOSITORY = Symbol('CertificateRepository');
