import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-data-hora-locacao',
  templateUrl: './data-hora-locacao.component.html',
  styleUrls: ['./data-hora-locacao.component.scss']
})
export class DataHoraLocacaoComponent implements OnInit {

  constructor(private route: Router) { }

  navigate_to_accessories(){
    this.route.navigate(['/options'])
  }

  navigate_to_home_page(){
    this.route.navigate([''])
  }

  ngOnInit(): void {
    this.PastDateTime();
  }

  min:any = "2022-08-28T17:55";

  PastDateTime(){
    var tdate = new Date();
    console.log(tdate);
  }
}
