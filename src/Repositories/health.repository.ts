import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthRepository {
  getStatus(): { status: string; message: string } {
    // Aqui você poderia adicionar checagens reais, por exemplo de DB ou serviços externos
    return {
      status: 'ok',
      message: 'API funcionando normalmente',
    };
  }
}
