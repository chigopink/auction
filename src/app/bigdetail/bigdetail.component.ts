import {Component, Input, OnInit} from '@angular/core';
import {BigScreen} from "../seminar-list/seminar-list.component";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-bigdetail',
  templateUrl: './bigdetail.component.html',
  styleUrls: ['./bigdetail.component.css']
})
export class BigdetailComponent implements OnInit {
  private bigscreen:BigScreen;
  private id:string;
  constructor(private routeInfo:ActivatedRoute) {
    this.id=routeInfo.snapshot.params["id"];
  }

  ngOnInit() {
    alert(this.id);
  }

}
