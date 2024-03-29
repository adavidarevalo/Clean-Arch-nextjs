import { Injectable } from '@nestjs/common';
import { EnvConfig, environment } from './env-config.interface';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnvConfigService implements EnvConfig {
  constructor(private configService: ConfigService) {}
  getAppPort(): number {
    return this.configService.get<number>('APP_PORT');
  }
  getNodeEnv(): environment {
    return this.configService.get<environment>('APP_ENV');
  }
}
