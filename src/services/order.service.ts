import { findUser } from "../repositories/user.repository";

// Compliant: the service goes through the repository layer instead of the db,
// so ArchSentry stays quiet.
export async function getOrder(userId: string) {
  return findUser(userId);
}
