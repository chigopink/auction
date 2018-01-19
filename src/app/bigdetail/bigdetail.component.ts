import {Component, Input, OnInit} from '@angular/core';
import {BigScreen} from "../seminar-list/seminar-list.component";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpInterceptorService} from "../apiServices/httpServices";

@Component({
  selector: 'app-bigdetail',
  templateUrl: './bigdetail.component.html',
  styleUrls: ['./bigdetail.component.css']
})
export class BigdetailComponent implements OnInit {
  private bigscreen:BigScreen=new BigScreen("","");
  id:string;
  constructor(private routeInfo:ActivatedRoute,private  httpInterceptorService: HttpInterceptorService,private router:Router) {
    this.id=routeInfo.snapshot.params["id"];


  }
  bigM={
    name:""
  };

  ngOnInit() {
    var body={
      seminarId:'3598',
      type:'checkIn',
      id:this.id
    }
    if(this.id) {
      this.httpInterceptorService.request(body, 'seminar.bigScreen.get').then(data => {
        this.bigM = data.data.content;
        this.bigscreen = new BigScreen(data.data.content.id, data.data.content.name);
      })
    }
  }

  submit(){
     if(this.id) {
       this.bigM.name = this.bigscreen.name;
       console.log(this.bigM);
       this.httpInterceptorService.request(this.bigM, 'seminar.bigScreen.updateCheckIn').then(data => {
         if (data.data.result == '0') {
           this.router.navigate(['/bigList']);
         }
       })
     }else{
       let params={
         seminarId:'3598',
         name:this.bigscreen.name,
         scale:'narrow',
         groupId:'0',
         signingPointId:'4606',
         signingPoint:'默认签到点',
         checkInByWeChat:'off',
         regOnSite:'off',
         regFormId:'',
         regFormName:'请选择报名表单',
         onTheWallField:'regInfo',
         configId:'197231',
         checkInConfigId:'197232',
         remark:''
       }
       this.httpInterceptorService.request(params, 'seminar.bigScreen.createCheckIn').then(data => {
         if (data.data.result == '0') {
           this.router.navigate(['/bigList']);
         }
       })
     }

  }



}
