import 'rxjs/add/operator/takeUntil';

import { Component, ComponentFactoryResolver, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AppService, RuckenCoreRuI18n, translate } from '@rucken/core';
import { RuckenTodoCoreRuI18n } from '@rucken/todo-core';
import { RuckenTodoWebRuI18n } from '@rucken/todo-web';
import { AlertModalComponent, BaseAppComponent, RuckenWebRuI18n, SharedService } from '@rucken/web';
import * as _ from 'lodash';

import { RuckenTodoRuI18n } from './i18n/ru.i18n';


@Component({
  selector: 'todo-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  entryComponents: [AlertModalComponent],
  encapsulation: ViewEncapsulation.None
})
export class TodoAppComponent extends BaseAppComponent {

  languages = [{
    code: 'ru',
    title: translate('Russian'),
    dic: _.merge(RuckenCoreRuI18n, RuckenWebRuI18n, RuckenTodoCoreRuI18n, RuckenTodoWebRuI18n, RuckenTodoRuI18n)
  }, {
    code: 'en',
    title: translate('English'),
    dic: null
  }];

  constructor(
    public viewContainerRef: ViewContainerRef,
    public app: AppService,
    public resolver: ComponentFactoryResolver,
    public translateService: TranslateService,
    public router: Router,
    public sharedService: SharedService
  ) {
    super(viewContainerRef, app, resolver, translateService, sharedService);

    router.events.takeUntil(this.destroyed$).subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        document.body.scrollTop = 0;
      }
    });
  }
  init() {
    super.init();
    if (window && window['loading_screen'] && window['loading_screen'].finish !== false) {
      window['loading_screen'].finish();
    }
  }
}
