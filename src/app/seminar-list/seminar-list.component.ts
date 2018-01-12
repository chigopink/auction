import { Component, OnInit } from '@angular/core';
import {Injectable}    from '@angular/core';

import { HttpInterceptorService } from '../apiServices/httpServices'

@Component({
  selector: 'app-seminar-list',
  templateUrl: './seminar-list.component.html',
  styleUrls: ['./seminar-list.component.css'],
  providers:[HttpInterceptorService]

})
@Injectable()
export class SeminarListComponent implements OnInit {

  private seminarList: Array<Seminar>=[];
  constructor(private httpInterceptorService: HttpInterceptorService) { }

  ngOnInit() {
    let parms={
      method: 'POST',
      url: 'http://s2-sdeb.smarket.net.cn/index.php', // 登录URL
      data: {
        command: {
          size: 0,
          orn: '02-0001-00000001',
          dst: '01-0401-00000001',
          type: 0x0002,
          cmd: 'seminar.getList',
          sess: '000_test_use_only_create_by_jack',
          seq: 0,
          ver: 1000,
          body:{
            tenantId:487,
            sceneName:'',
            status:'',
            key:'',
            sortName:'createTime',
            start:0,
            num:20
          },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      },
    }
    this.httpInterceptorService.request(parms).then(data => {
      if(data.data.content.items){
        data.data.content.items.forEach(item=>{
          this.seminarList.push(new Seminar(item.seminarId,item.name))
        })


      }
    })
  }

}
export class Seminar{
  private seminarId:string;
  private seminarName:string;
  constructor(seminarId:string,seminarName:string){
    this.seminarId = seminarId;
    this.seminarName = seminarName;
  }

}
