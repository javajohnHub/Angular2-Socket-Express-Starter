import {Directive, Renderer, Input} from '@angular/core'
import {SocketService} from '../../shared/socket.service';
declare var CodeMirror: any;

@Directive({
  selector: '[editor]'
})
export class EditorDirective {
  editor: any;
  socket: any;
  constructor(private _renderer: Renderer) {

  }
  ngAfterViewInit() {
    this.socket = SocketService.getInstance();

    this.editor = CodeMirror.fromTextArea(
      this._renderer.selectRootElement('[editor]'),
      {
        lineNumbers: true,
        lineWrapping: true,
        mode: {
          name: "javascript",
          globalVars: true}
      }


    );
    this.editor.setOption("theme", "bespin" );

    this.socket.on('change',(data) => {
      this.editor.replaceRange(data.text, data.from, data.to);

    });

    this.editor.on('change',(i, op) => {
      this.socket.emit('change', op);

    });
  }
}
