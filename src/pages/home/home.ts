import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NoticeModalContent } from '../../components/modals/notice/notice';
@Component( {
    selector: 'home-page',
    templateUrl: 'home.html'
})
export class HomePage {
    constructor( private ngbModal: NgbModal ) {
        this.onClickModal();
    }
    onClickModal() {
    const modalRef = this.ngbModal.open( NoticeModalContent, { windowClass: 'notice' } );
          modalRef.componentInstance.name = 'Aonic';
    }
}