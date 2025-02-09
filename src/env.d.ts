interface ImportMetaEnv {
  readonly PUBLIC_DIRECTUS_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
