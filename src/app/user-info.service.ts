import { Injectable } from '@angular/core';
import { MyCardSSOUser } from './utility/MyCardSSOUser';
import { ActivatedRoute, Router } from '@angular/router';
import { loginUrl } from './utility/login-url';
import { Buffer } from 'buffer';

@Injectable({
  providedIn: 'root',
})
export class UserInfoService {
  user?: MyCardSSOUser;

  constructor(private router: Router) {
    this.initUser();
  }

  initUser() {
    const ssoString = new URLSearchParams(window.location.search).get('sso');
    const loginString = ssoString || localStorage.getItem('login');
    if (!loginString) {
      return;
    }
    localStorage.setItem('login', loginString);
    const decodedLoginString = Buffer.from(loginString, 'base64').toString();
    const params = new URLSearchParams(decodedLoginString);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.user = Object.fromEntries(params);
  }

  getHeader(): { Authorization?: string } {
    if (!this.user) {
      return {};
    }
    return { Authorization: `Bearer ${this.user.token}` };
  }

  login() {
    const currentUrl = window.location.href;
    window.location.replace(loginUrl(currentUrl));
  }

  async logout() {
    this.user = undefined;
    localStorage.removeItem('login');
    await this.router.navigateByUrl('/tournament');
    window.location.reload();
  }
}
