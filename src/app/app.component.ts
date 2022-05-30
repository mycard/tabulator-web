import { AfterViewInit, Component, OnInit } from '@angular/core';
import { UserInfoService } from './user-info.service';
import { Menus } from './app-routing.module';
import { Tooltip } from 'bootstrap';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'MyCard 赛事排表器';
  menus = Menus;

  constructor(
    public userInfo: UserInfoService,
    private current: ActivatedRoute
  ) {}

  ngAfterViewInit() {
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
      new Tooltip(tooltipTriggerEl);
    });
  }
}
