// src/types/global.d.ts
import { Mongoose } from 'mongoose';

declare global {
  namespace NodeJS {
    interface Global {
      mongoose?: {
        conn: Mongoose | null;
        promise: Promise<Mongoose> | null;
      };
    }
  }
}

// This file is a module, so include this to avoid global scope issues
export {};