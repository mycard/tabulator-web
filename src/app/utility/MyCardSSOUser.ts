export interface MyCardSSOUser {
  id: string;
  username: string;
  name: string;
  email: string;
  password_hash: string;
  salt: string;
  active: string;
  admin: string;
  avatar: string;
  locale: string;
  registration_ip_address: string;
  ip_address: string;
  created_at: string;
  updated_at: string;
  return_sso_url: string;
  external_id: string;
  avatar_url: string;
  avatar_force_update: string;
  token: string;
}
