/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  env: {
    'POSTGRES_USER': 'postgres',
    'POSTGRES_PASSWORD': 'admin2024',
    'POSTGRES_DB': 'sitecms-db',
    'DATABASE_URL': 'postgresql://postgres:admin2024@postgres:5432/sitecms-db?schema=public',
    'S3_ENDPOINT': 'minio',
    'S3_PORT': '9000',
    'S3_ACCESS_KEY': 'minio',
    'S3_SECRET_KEY': 'miniosecret',
    'S3_BUCKET_NAME': 'uploads',
    'REDIS_ENDPOINT': 'redis',
    'REDIS_PORT': '6379',
    'REDIS_URL': 'redis://:redissecret@redis:6379',
    'REDIS_USERNAME': 'redis',
    'REDIS_PASSWORD': 'redissecret',
    'REDIS_DB': '0',
    'OPENAI_API': 'sk-proj-FhAAFF28DltmiaiUwVQ9T3BlbkFJXIEgVBlkXAUOc1xeni7l',
    'OPENAI_API_KEY': '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',
    'RESEND_API_TOKEN': 're_PmTgkbED_Bfsdo8isciirBUpHrtMykM8X',
  },
};

export default nextConfig;
