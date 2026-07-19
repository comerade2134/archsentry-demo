// Fake data layer. In a real app this would be a pooled connection.
export const db = {
  query: async (sql: string): Promise<unknown[]> => {
    // (no-op in the demo)
    return [];
  },
};
