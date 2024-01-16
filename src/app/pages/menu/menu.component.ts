import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/Services/order-details.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  constructor(private service:OrderDetailsService){ }
  frunitureData:any;
  ngOnInit(): void{
    this.frunitureData=this.service.frunitureDetials;

  }


}
