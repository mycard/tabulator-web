import { Injectable } from '@angular/core';
import { UserInfoService } from './user-info.service';
import { ToastService } from './toast.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ExceptionService {
  constructor(private toast: ToastService, private userInfo: UserInfoService) {}

  handle(e: any, noRedirect = false) {
    const error = e as HttpErrorResponse;
    if (error.status === 401) {
      if (!noRedirect) {
        return undefined;
      }
      this.toast.warn('没有登录。');
      this.userInfo.login();
    } else {
      this.toast.error(error.error?.message || error.message);
    }
    return undefined;
  }

  async run<T>(fun: () => T | Promise<T>): Promise<T | undefined> {
    try {
      return await fun();
    } catch (e) {
      this.handle(e);
      return undefined;
    }
  }
}
