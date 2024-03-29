export interface EnvConfig {
  getAppPort(): number;
  getNodeEnv(): 'test' | 'development' | 'production' | 'staging';
}
