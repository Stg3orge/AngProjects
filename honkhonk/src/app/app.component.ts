import { Component } from '@angular/core';
import { SwUpdate } from "@angular/service-worker";
import { checkAndUpdatePureExpressionDynamic } from '@angular/core/src/view/pure_expression';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'honkhonk';
  appName = 'Toot my nose! Honk!';

  update: boolean = false;

  constructor(updates: SwUpdate){
    updates.available.subscribe(event => {
        //this.update = true;

        updates.activateUpdate().then(() => document.location.reload());
      })
  }
}
