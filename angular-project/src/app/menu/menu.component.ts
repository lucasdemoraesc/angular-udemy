import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

public test: String = "All bad :(";

  constructor() { }

  ngOnInit(): void {
  }

  ficarBem() {
    this.test = "All fine :)";
  }

  ficarPior() {
    this.test = "All bad :(";
  }

}
