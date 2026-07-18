import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { IssueCertificateUseCase } from '../../application/use-cases/issue-certificate.use-case';
import { ListHolderCertificatesUseCase } from '../../application/use-cases/list-holder-certificates.use-case';
import { RevokeCertificateUseCase } from '../../application/use-cases/revoke-certificate.use-case';
import { VerifyCertificateUseCase } from '../../application/use-cases/verify-certificate.use-case';
import {
  IssueCertificateRequest,
  RevokeCertificateRequest,
} from '../dtos/requests.dto';

@Controller()
export class CertificatesController {
  constructor(
    private readonly issueCertificate: IssueCertificateUseCase,
    private readonly verifyCertificate: VerifyCertificateUseCase,
    private readonly revokeCertificate: RevokeCertificateUseCase,
    private readonly listHolderCertificates: ListHolderCertificatesUseCase,
  ) {}

  @Post('certificates')
  issue(@Body() body: IssueCertificateRequest) {
    return this.issueCertificate.execute(body);
  }

  /** Verificación pública (RN-07): no requiere autenticación. */
  @Get('certificates/:code/verify')
  verify(@Param('code') code: string) {
    return this.verifyCertificate.execute(code);
  }

  @Post('certificates/:code/revoke')
  revoke(@Param('code') code: string, @Body() body: RevokeCertificateRequest) {
    return this.revokeCertificate.execute({
      verificationCode: code,
      institutionId: body.institutionId,
      reason: body.reason,
    });
  }

  @Get('holders/:document/certificates')
  byHolder(@Param('document') document: string) {
    return this.listHolderCertificates.execute(document);
  }
}
