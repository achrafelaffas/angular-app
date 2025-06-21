import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product implements OnInit {
  products: any;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data;
    });
  }

  handleDelete(product: any) {
    this.productService.handleDelete(product).subscribe((data: any) => {
      this.products = data;
    });
  }

  handleSelected(product: any) {
    product.selected = !product.selected;
  }
}
