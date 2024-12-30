import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

config({
  path: '.env.local',
});

const dropTables = async () => {
  if (!process.env.POSTGRES_URL) {
    throw new Error('POSTGRES_URL is not defined');
  }

  const connection = postgres(process.env.POSTGRES_URL, { max: 1 });
  const db = drizzle(connection);

  console.log('⏳ Dropping tables...');

  const sql = `
    DROP TABLE IF EXISTS "Vote" CASCADE;
    DROP TABLE IF EXISTS "Message" CASCADE;
    DROP TABLE IF EXISTS "Suggestion" CASCADE;
    DROP TABLE IF EXISTS "Document" CASCADE;
    DROP TABLE IF EXISTS "Chat" CASCADE;
    DROP TABLE IF EXISTS "User" CASCADE;
  `;

  await connection.unsafe(sql);

  console.log('✅ Tables dropped successfully');
  process.exit(0);
};

dropTables().catch((err) => {
  console.error('❌ Failed to drop tables');
  console.error(err);
  process.exit(1);
}); 