import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { RegisterInstitutionUseCase } from '../../application/use-cases/register-institution.use-case';
import { INSTITUTION_REPOSITORY } from '../../domain/repositories/institution.repository';
import type { InstitutionRepository } from '../../domain/repositories/institution.repository';
import { RegisterInstitutionRequest } from '../dtos/requests.dto';

/**
 * Capa más externa: solo traduce HTTP <-> casos de uso.
 * No contiene ni una sola regla de negocio.
 */
@Controller('institutions')
export class InstitutionsController {
  constructor(
    private readonly registerInstitution: RegisterInstitutionUseCase,
    @Inject(INSTITUTION_REPOSITORY)
    private readonly institutions: InstitutionRepository,
  ) {}

  @Post()
  register(@Body() body: RegisterInstitutionRequest) {
    return this.registerInstitution.execute(body);
  }

  @Get()
  list() {
    return this.institutions.findAll();
  }
}
