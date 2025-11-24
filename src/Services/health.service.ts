import { Injectable } from '@nestjs/common';
import { HealthRepository } from 'src/Repositories/health.repository';


@Injectable()
export class HealthService {
  constructor(private readonly healthRepository: HealthRepository) {}

  checkHealth() {
    const status = this.healthRepository.getStatus();
    const uptime = process.uptime(); // tempo que a aplicação está rodando
    return { ...status, uptime };
  }
}
