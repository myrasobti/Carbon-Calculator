import {
  users,
  calculations,
  type User,
  type UpsertUser,
  type InsertUser,
  type Calculation,
  type InsertCalculation,
} from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";
import { randomUUID } from "crypto";

export interface IStorage {
  // User operations
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(userData: InsertUser): Promise<User>;
  upsertUser(user: UpsertUser): Promise<User>;

  // Calculation operations
  createCalculation(userId: string, data: InsertCalculation): Promise<Calculation>;
  getCalculation(id: string): Promise<Calculation | undefined>;
  getUserCalculations(userId: string): Promise<Calculation[]>;
}

export class DatabaseStorage implements IStorage {
  // Get a user by ID
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  // Get a user by username
  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  // Create a new user
  async createUser(userData: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(userData)
      .returning();
    return user;
  }

  // Create or update a user
  async upsertUser(userData: UpsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(userData)
      .onConflictDoUpdate({
        target: users.email,
        set: {
          firstName: userData.firstName,
          lastName: userData.lastName,
          profileImageUrl: userData.profileImageUrl,
        },
      })
      .returning();
    return user;
  }

  // Create a new calculation
  async createCalculation(userId: string, data: InsertCalculation): Promise<Calculation> {
    // Calculate total carbon footprint
    const totalFootprint = 
      data.electricBill * 105 +
      data.gasBill * 105 +
      data.oilBill * 113 +
      data.carMileage * 0.79 +
      data.shortFlights * 1100 +
      data.longFlights * 4400 +
      (!data.recycleNewspaper ? 184 : 0) +
      (!data.recycleAluminum ? 166 : 0);

    const [calculation] = await db
      .insert(calculations)
      .values({
        id: randomUUID(),
        userId,
        ...data,
        totalFootprint,
      })
      .returning();

    return calculation;
  }

  // Get a calculation by ID
  async getCalculation(id: string): Promise<Calculation | undefined> {
    const [calculation] = await db
      .select()
      .from(calculations)
      .where(eq(calculations.id, id));
    return calculation;
  }

  // Get all calculations for a user
  async getUserCalculations(userId: string): Promise<Calculation[]> {
    return await db
      .select()
      .from(calculations)
      .where(eq(calculations.userId, userId))
      .orderBy(desc(calculations.createdAt));
  }
}

export const storage = new DatabaseStorage();
