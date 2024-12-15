export const API_CONFIG = {
  IMGBB_KEY: 'd25cb59ac5ce8e961f8a50f9a5a0deac',
  IMGBB_URL: 'https://api.imgbb.com/1/upload',
} as const;

export const IMAGE_CONFIG = {
  ACCEPTED_TYPES: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
  MAX_SIZE: 32 * 1024 * 1024, // 32MB
} as const;