import { db } from "../db";

// ArchSentry flags this service: it talks to the database directly (instead of
// going through a repository) and embeds a secret in source. Both break the
// team's architectural contract in archsentry.yml.
const API_KEY = "sk-demoOnlyNotReal-1234567890abcdef";

export async function createUser(email: string) {
  const rows = await db.query("INSERT INTO users (email) VALUES ('" + email + "')");
  return rows;
}
