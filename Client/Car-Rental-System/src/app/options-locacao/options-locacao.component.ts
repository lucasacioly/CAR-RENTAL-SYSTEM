import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-options-locacao',
  templateUrl: './options-locacao.component.html',
  styleUrls: ['./options-locacao.component.scss']
})
export class OptionsLocacaoComponent implements OnInit {

  constructor(private route: Router) { }

  navigate_to_home_page(){
    this.route.navigate([''])
  }

  ngOnInit(): void {
  }

}
