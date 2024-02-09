import { Directive, HostListener, HostBinding, Output, EventEmitter, Input } from '@angular/core';

@Directive({
  selector: '[fileDragDrop]'
})

export class FileDragNDropDirective {
  @Output() filesChangeEmiter : EventEmitter<File[]>= new EventEmitter();

  @HostBinding('style.background') private background = '#eee';
  @HostBinding('style.border') private borderStyle = '2px dashed';
  @HostBinding('style.border-color') private borderColor = '#696D7D';
  @HostBinding('style.border-radius') private borderRadius = '5px';

  constructor() { }

  @HostListener('dragover', ['$event']) public onDragOver(e:DragEvent){
    e.preventDefault();
    e.stopPropagation();
    this.background = '#999';
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(e:DragEvent){
    e.preventDefault();
    e.stopPropagation();
    this.background = '#ddd'
  }

  @HostListener('drop', ['$event']) public onDrop(e:DragEvent){
    e.preventDefault();
    e.stopPropagation();
    this.background = '#ddd';

    const files: File[] = this.extractFiles(e)

    this.filesChangeEmiter.emit(files);
  }


  private extractFiles(event: DragEvent): File[] {
    const dataTransfer = event.dataTransfer;
    if (!dataTransfer) {
      return [];
    }

    const files: File[] = [];
    const items = dataTransfer.items;

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (item.kind === 'file') {
        const file = item.getAsFile();
        if (file) {
          files.push(file);
        }
      }
    }

    return files;
  }


}
