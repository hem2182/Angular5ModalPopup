import { Component, OnInit } from "@angular/core";

import { ModalService } from "../_services/index";

@Component({
  moduleId: module.id.toString(),
  templateUrl: "home.component.html",
})
export class HomeComponent implements OnInit {
  private bodyText: string;
  private PopupHeader: string;
  private PopupBody: string;
  private PopupType: PopupType;

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    this.bodyText = "This text can be updated in modal 1";
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  Function1() {
    console.log("Confirm is clicked");
    this.closeModal("custom-modal-1");
  }

  AlertUser() {
    this.ShowPopupFunction("Sample 1", "Sample 2", PopupType.Alert);
  }

  ShowPopupFunction(heading: string, body: string, type: PopupType) {
    this.PopupHeader = heading;
    this.PopupBody = body;
    this.PopupType = type;
    this.openModal("custom-modal-1");
    // $("#myModal").modal({backdrop: "static"});
  }
}

export enum PopupType {
  Alert,
  Confirm,
}
