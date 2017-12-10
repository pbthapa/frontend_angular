import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-multi-choice',
  templateUrl: './multi-choice.component.html'
})
export class MultiChoiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showModal(): void {
    $(".ui.modal").modal("show");
  }
}
