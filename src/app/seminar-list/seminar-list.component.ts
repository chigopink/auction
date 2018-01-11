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
          sess: 'bbd35f41e5533f70e3dc4a5bb523cc9d',
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
      let a=data.data.content;
      console.log(a);
    })
  }

}
export class Seminar{
  private seminarId:string;
  private seminarName:string;
}
