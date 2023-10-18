import { Component } from '@angular/core';
import { IconDefinition, faUpload, faBold, faItalic, faList, faCode} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {
  faUpload: IconDefinition = faUpload
  faBold: IconDefinition = faBold
  faItalic: IconDefinition = faItalic
  faList: IconDefinition = faList
  faCode: IconDefinition = faCode
}
