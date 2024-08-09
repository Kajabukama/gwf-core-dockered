#!/bin/sh

npx prisma generate
npx prisma db push --accept-data-loss
npx prisma db seed
npm run dev
