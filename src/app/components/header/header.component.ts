import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router) {}

  is_connected() {
    return sessionStorage.getItem("user") != null;
  }

  get_username(){
    return sessionStorage.getItem("user");
  }

  deconnecter() {
    sessionStorage.clear();
    this.router.navigate(["/connexion"]);
  }
}
