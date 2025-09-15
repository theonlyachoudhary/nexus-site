export interface VercelPostgresMigrationsConfig {
  dir?: string
  tableName?: string
}

export interface VercelPostgresAdapterOptions {
  connectionString?: string
  max?: number
  idleTimeoutMillis?: number
  ssl?: boolean
  migrations?: VercelPostgresMigrationsConfig
}
export interface VercelPostgresMigrationsConfig {
  dir?: string
  tableName?: string
}

export interface VercelPostgresAdapterOptions {
  connectionString?: string
  max?: number
  idleTimeoutMillis?: number
  ssl?: boolean
  migrations?: VercelPostgresMigrationsConfig
}
