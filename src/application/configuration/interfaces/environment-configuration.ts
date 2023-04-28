export type Config = {
  cors: {
    origin: string;
  };
};

export interface EnvironmentConfiguration {
  getConfig(): Promise<Config>;
}
