import { Buffer } from 'buffer';

export function loginUrl(callbackUrl: string) {
  let params = new URLSearchParams();
  params.set('return_sso_url', callbackUrl);
  const payload = Buffer.from(params.toString()).toString('base64');
  const url = new URL('https://accounts.moecube.com/signin');
  params = url['searchParams'];
  params.set('sso', payload);
  return url.toString();
}
