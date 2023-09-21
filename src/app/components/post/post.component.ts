import { Component, Input } from '@angular/core';
import { Post } from 'src/app/models/Post.model';
import { IconDefinition, faEye, faCalendarDays, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() post!: Post;
  faEye: IconDefinition = faEye;
  faCalendarDays: IconDefinition = faCalendarDays;
  faUser: IconDefinition = faUser;
}
