import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-getproduct',
  templateUrl: './getproduct.component.html',
  styleUrls: ['./getproduct.component.css']
})
export class GetproductComponent implements OnInit {

  products:any;

  constructor(private service:ProductService){

    this.getProduct();
  }

  getProduct(){

    this.service.getProduct().subscribe(response=>{

      this.products=response.json();


    })

  }

  

  ngOnInit() {
  }

}
