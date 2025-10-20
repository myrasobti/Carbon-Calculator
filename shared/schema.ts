import { sql } from 'drizzle-orm';
import {
  index,
  integer,
  jsonb,
  pgTable,
  timestamp,
  varchar,
  boolean,
  real,
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Session storage table (required for login)
export const sessions = pgTable(
  "sessions",
  {
    sid: varchar("sid").primaryKey(),
    sess: jsonb("sess").notNull(),
    expire: timestamp("expire").notNull(),
  },
  (table) => [index("IDX_session_expire").on(table.expire)],
);

// User table - stores who is using the app
export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: varchar("username").unique().notNull(),
  password: varchar("password").notNull(),
  email: varchar("email").unique(),
  firstName: varchar("first_name"),
  lastName: varchar("last_name"),
  profileImageUrl: varchar("profile_image_url"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Calculations table - stores carbon footprint calculations
export const calculations = pgTable("calculations", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  electricBill: real("electric_bill").notNull(),
  gasBill: real("gas_bill").notNull(),
  oilBill: real("oil_bill").notNull(),
  carMileage: real("car_mileage").notNull(),
  shortFlights: integer("short_flights").notNull(),
  longFlights: integer("long_flights").notNull(),
  recycleNewspaper: boolean("recycle_newspaper").notNull(),
  recycleAluminum: boolean("recycle_aluminum").notNull(),
  totalFootprint: real("total_footprint").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// Types for TypeScript
export type User = typeof users.$inferSelect;
export type UpsertUser = typeof users.$inferInsert;

export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
  createdAt: true,
});
export type InsertUser = z.infer<typeof insertUserSchema>;

export const insertCalculationSchema = createInsertSchema(calculations).omit({
  id: true,
  userId: true,
  totalFootprint: true,
  createdAt: true,
});
export type InsertCalculation = z.infer<typeof insertCalculationSchema>;
export type Calculation = typeof calculations.$inferSelect;
