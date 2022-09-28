import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-feedback',
  templateUrl: './card-feedback.component.html',
  styleUrls: ['./card-feedback.component.scss']
})
export class CardFeedbackComponent implements OnInit {

  @Input() nome!: string;
  @Input() nota!: string;
  @Input() descricao!: string;


  constructor() { }

  ngOnInit(): void {
  }

}
