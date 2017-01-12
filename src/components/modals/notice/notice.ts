import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
    selector: 'notice-modal-content',
    templateUrl: 'notice.html'
})
export class NoticeModalContent {
  @Input() name;
  constructor(public activeModal: NgbActiveModal) {}
}
