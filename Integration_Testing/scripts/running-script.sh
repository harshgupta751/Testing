docker-compose up -d
sleep 10
npx prisma migrate dev --name init
npm run test
docker-compose down