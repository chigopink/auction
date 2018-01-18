import { Component, OnInit } from '@angular/core';
import {Injectable}    from '@angular/core';

import { HttpInterceptorService } from '../apiServices/httpServices'

@Component({
  selector: 'app-seminar-list',
  templateUrl: './seminar-list.component.html',
  styleUrls: ['./seminar-list.component.css']

})
@Injectable()
export class SeminarListComponent implements OnInit {

  private bigScreenList: Array<BigScreen>=[];
  constructor(private httpInterceptorService: HttpInterceptorService) { }

  ngOnInit() {
    this.getlist();
  }
  delete(id){
    console.log(id);
  }
  getlist(){
    let parms={
      method: 'POST',
      url: 'http://s2-sdeb.smarket.net.cn/index.php', // 登录URL
      data: {
        command: {
          size: 0,
          orn: '02-0001-00000001',
          dst: '01-0401-00000001',
          type: 0x0002,
          cmd: 'seminar.bigScreen.getList',
          sess: '000_test_use_only_create_by_jack',
          seq: 0,
          ver: 1000,
          body:{
            seminarId:3598
          },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      },
    }
    this.httpInterceptorService.request(parms).then(data => {
      if(data.data.content[0].items){
        data.data.content[0].items.forEach(item=>{
          this.bigScreenList.push(new BigScreen(item.id,item.name))
        })


      }
    })
  }

}
export class BigScreen{
  private id:string;
  private name:string;
  constructor(id:string,name:string){
    this.id = id;
    this.name = name;
  }

}
