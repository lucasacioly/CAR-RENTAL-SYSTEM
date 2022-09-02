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


  min_date:any = "2022-08-28T17:55";

  PastDateTime(){
    var tdate:any = new Date();
    var date:any = tdate.getDate();
    if (date < 10) {
      date = '10' + date;
    }
    var month:any = tdate.getMonth();
    if (month < 10) {
      month = '10' + month + 1;
    }
    var year:any = tdate.getFullYear();
    var hours:any = tdate.getHours();
    var minutes:any = tdate.getMinutes();

    this.min_date = year + '-' + month + '-' + date + 'T' + hours + ':' + minutes;
  }

  values:any;
  onChange(value:any){
    var todate:any = new Date();
    var selectDate:any = new Date();
    if(todate > selectDate){
      this.values="";
      alert("Please, select a valid date and time");
    }
    

  }
}
