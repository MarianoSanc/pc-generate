import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  URL = 'http://192.168.1.200:81/apiCalpro/';
  //URL = 'http://26.110.177.38:81/apiCalpro/';

  constructor(protected http: HttpClient) {}

  getData() {
    return this.http.get(`${this.URL}getdata.php`);
  }
  getPh() {
    return this.http.get(`${this.URL}getpc.php`);
  }

  postProyecto(data) {
    return this.http.post(`${this.URL}post.php`, data);
  }

  getTests() {
    return this.http.get('https://randomuser.me/api/?results=25');
  }

  getPC() {
    return this.http.get('http://26.110.177.38:4001/api/pc');
  }

  postPC(data) {
    return this.http.post('http://26.110.177.38:4001/api/pc', data);
  }
}
