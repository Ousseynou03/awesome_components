import { Injectable } from "@angular/core";
import { PostsService } from "../services/posts.service";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Post } from "../models/post.models";
import { Observable } from "rxjs";

@Injectable()
export class PostResolver implements Resolve<Post[]>{

    constructor(private postService : PostsService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post[]> {
        return this.postService.getPosts();
    }

}
