import {Component, OnInit} from '@angular/core';
import {Injectable} from '@angular/core';

import {HttpInterceptorService} from '../apiServices/httpServices'

@Component({
  selector: 'app-seminar-list',
  templateUrl: './seminar-list.component.html',
  styleUrls: ['./seminar-list.component.css']

})
@Injectable()
export class SeminarListComponent implements OnInit {

  private bigScreenList: Array<BigScreen> = [];

  constructor(private httpInterceptorService: HttpInterceptorService) {
  }

  ngOnInit() {
    this.getlist();
  }

  /**
   * 统一发送请求
   * @id 大屏ID
   */
  delete(id: string) {
    if (confirm("确定删除吗ID为" + id + "的大屏吗？")) {
      let params = {
        seminarId: '3598',
        id: id,
        type: 'checkIn',
        groupId: '0'
      };
      this.httpInterceptorService.request(params, 'seminar.bigScreen.delete').then(data => {
        if (data.data.result == '0') {
          this.getlist();
        }
      })
    }

  }

  getlist() {
    this.bigScreenList = [];
    let parms = {
      seminarId: 3598
    }
    this.httpInterceptorService.request(parms, 'seminar.bigScreen.getList').then(data => {
      if (data.data.content[0].items) {
        data.data.content[0].items.forEach(item => {
          this.bigScreenList.push(new BigScreen(item.id, item.name))
        })


      }
    })
  }

}

export class BigScreen {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

}
