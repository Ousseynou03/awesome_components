import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post.models';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class PostsService {

    constructor(private http: HttpClient) {}

    public getPosts():Observable<Post[]> {
        return this.http.get<Post[]>('http://localhost:3000/posts');
        
    }
    
}