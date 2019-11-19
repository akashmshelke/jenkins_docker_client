import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-getproduct',
  templateUrl: './getproduct.component.html',
  styleUrls: ['./getproduct.component.css']
})
export class GetproductComponent implements OnInit {

  products:any;
  DatabaseError:any;

  constructor(private service:ProductService){

    this.getProduct();
  }

  getProduct(){

    this.service.getProduct().subscribe(response=>{
      let body;
      body=response.json();
      console.log(body);
      if(body['status']==="success"){
        this.DatabaseError="";
        this.products=body['data'];
      }else{
        this.DatabaseError=body['error']
        this.products=[];
      }



    })

  }

  

  ngOnInit() {
  }

}
