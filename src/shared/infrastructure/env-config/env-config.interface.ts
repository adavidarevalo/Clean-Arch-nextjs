export type environment = 'test' | 'development' | 'production' | 'staging';

export interface EnvConfig {
  getAppPort(): number;
  getNodeEnv(): string;
}
