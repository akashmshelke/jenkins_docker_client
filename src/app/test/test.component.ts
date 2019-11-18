import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  TestMsg;
  constructor(private service:ProductService) { 

    this.Test();
  }

  ngOnInit() {
  }

  Test(){

    this.service.Test().subscribe(response=>{
      console.log(response.json());

      this.TestMsg=response.json()['msg'];
    })
  }
}
