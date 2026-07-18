import { Controller, Get, Inject } from '@nestjs/common';
import { VerifyChainUseCase } from '../../application/use-cases/verify-chain.use-case';
import { CERTIFICATE_LEDGER } from '../../application/ports/certificate-ledger.port';
import type { CertificateLedger } from '../../application/ports/certificate-ledger.port';

@Controller('blockchain')
export class BlockchainController {
  constructor(
    private readonly verifyChain: VerifyChainUseCase,
    @Inject(CERTIFICATE_LEDGER) private readonly ledger: CertificateLedger,
  ) {}

  /** Transparencia: cualquiera puede inspeccionar la cadena (RF-08). */
  @Get()
  chain() {
    return this.ledger.getChain();
  }

  /** Auditoría pública de integridad (RF-07). */
  @Get('verify')
  verify() {
    return this.verifyChain.execute();
  }
}
