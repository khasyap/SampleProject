import { Component } from '@angular/core';
import { Fakestore } from '../fakestore';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  constructor(private fs: Fakestore){}
  products:any;
  ngOnInit(){
    this.fs.getProducts().subscribe((res)=>{
      this.products=res;
    })
  }

}
