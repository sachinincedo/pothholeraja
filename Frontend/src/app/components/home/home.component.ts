import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  TotalPotHoleReported:any = 0;
  PotholeIReported: any= 0 ;

  constructor(private apiService: LoginService) { }

  ngOnInit(): void {
    this.apiService.homeData().subscribe(
      data => {
        this.TotalPotHoleReported = data.totalpothole;
        this.PotholeIReported = data.potholeIreported;
      },
      error => {
        console.log(error);
      }
    );
  }




}
