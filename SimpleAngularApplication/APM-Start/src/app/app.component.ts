import { Component } from "@angular/core";

@Component({
  selector: "pm-root",
  template: `
  <div><h1>{{pageTitle}}</h1>
    <pm-products></pm-products>
  </div>
    `
})

export class AppComponent{
  dickButt: number = 55.36;
  pageTitle: string = "ACME DICK Management";
}