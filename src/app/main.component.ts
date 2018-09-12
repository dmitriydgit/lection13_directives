import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { data } from './data';

@Component({
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.scss']
})

export class MainComponent {
  posts: any;
  colorLeave="#fff";
colorEnter="orange";


  constructor(private http: HttpClient) {
    this.getData()
  }
    
    getData(){
      this.posts = data
    }
}

class Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  photoUrl: string;
}