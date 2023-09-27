import { Injectable } from '@angular/core';
import { Post } from '../models/Post.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private readonly apiURL = 'http://20.226.34.135/api/'

  constructor(
    private http: HttpClient
  ) {}

  getPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(`${this.apiURL}Posts/all`);
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.apiURL}Posts/${id}`);
  }

  getUserById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiURL}Users/${id}`)
  }

}
