import {Component} from '@angular/core';

@Component({
  selector: 'app-editor',
  template: `    
    <textarea editor id="code" name="code">
        // Some content
    </textarea>
    
  `,
})

export class EditorComponent{

  constructor(){

  }

}
