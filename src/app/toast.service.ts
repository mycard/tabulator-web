import { Injectable } from '@angular/core';

export interface ToastInfo {
  id: number;
  header: string;
  body: string;
  persist?: boolean;
  classname?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  currentId = 0;

  toasts: ToastInfo[] = [];

  show(header: string, body: string, classname?: string) {
    const id = ++this.currentId;
    this.toasts.push({ id, header, body, classname });
    return id;
  }
  hide(id: number) {
    const index = this.toasts.findIndex((t) => t.id === id);
    if (index !== -1) {
      this.toasts.splice(index, 1);
    }
  }

  error(message: string) {
    this.show('错误', message, 'bg-danger text-light');
  }

  warn(message: string) {
    this.show('警告', message, 'bg-warning');
  }

  success(message?: string) {
    this.show('成功', message || '操作成功', 'bg-success text-light');
  }

  attention(message: string) {
    this.show('注意', message, 'bg-primary');
  }

  info(message: string) {
    this.show('消息', message);
  }

  constructor() {}
}
