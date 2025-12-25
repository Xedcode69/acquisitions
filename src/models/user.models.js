import { pgTable, varchar, serial, timestamp} from 'drizzle-orm/pg-core';

export const userModel = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', {maxLength: 50}).notNull(),
  email: varchar('email', {maxLength: 50}).notNull().unique(),
  password: varchar('password', {maxLength: 50}).notNull(),
  role: varchar('role', {maxLength: 20}).notNull().default('user'),
  created_at: timestamp('created_at').defaultNow().notNull(),
  updated_st: timestamp('updated_at').defaultNow().notNull()
});




