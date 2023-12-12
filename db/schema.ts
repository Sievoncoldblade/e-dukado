import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey().notNull(),
  email: varchar("email").unique(),
  password: varchar("password"),
});

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
