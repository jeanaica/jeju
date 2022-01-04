export interface User {
  address: string;
  slp: number;
  share: number;
  handle: string;
  ign?: string;
  isAdmin?: boolean;
  mmr: number;
  rank: number;
}

export default User;
