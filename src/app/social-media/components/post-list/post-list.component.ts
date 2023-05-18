import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Post } from '../../models/post.models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit{

  posts$!: Observable<Post[]>

  constructor(private route : ActivatedRoute){}


  //Accés au données
  ngOnInit(): void {
    this.posts$ = this.route.data.pipe(
      map(data => data['posts'])
    );
  }

  

}