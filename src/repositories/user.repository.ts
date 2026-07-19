import { db } from "../db";

// Repository layer: this is the ONE place allowed to talk to the database
// directly. ArchSentry's rules permit db access here (paths exclude
// **/repositories/**), so this file stays clean.
export async function findUser(id: string) {
  return db.query("SELECT * FROM users WHERE id = " + id);
}
