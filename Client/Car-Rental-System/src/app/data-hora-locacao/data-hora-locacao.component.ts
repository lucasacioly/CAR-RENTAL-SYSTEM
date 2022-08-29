import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-hora-locacao',
  templateUrl: './data-hora-locacao.component.html',
  styleUrls: ['./data-hora-locacao.component.scss']
})
export class DataHoraLocacaoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.PastDateTime();
  }

  min:any = "2022-08-28T17:55";

  PastDateTime(){
    var tdate = new Date();
    console.log(tdate);
  }
}
