import { Component } from '@angular/core';
import {BasePageComponent} from "../../partials/base-page/base-page.component";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent extends BasePageComponent{
  constructor(route:ActivatedRoute) {
    super(route);
  }
}
