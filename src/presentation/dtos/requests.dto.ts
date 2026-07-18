export class RegisterInstitutionRequest {
  name: string;
  country: string;
}

export class IssueCertificateRequest {
  institutionId: string;
  holderName: string;
  holderDocument: string;
  degreeTitle: string;
}

export class RevokeCertificateRequest {
  institutionId: string;
  reason: string;
}
