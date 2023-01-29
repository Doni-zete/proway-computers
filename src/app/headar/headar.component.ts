import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';

@Component({
  selector: 'app-headar',
  templateUrl: './headar.component.html',
  styleUrls: ['./headar.component.css']
})
export class HeadarComponent implements OnInit {

  constructor(
    public carrinhoService: CarrinhoService
  ) { }

  ngOnInit(): void {

  }
}


