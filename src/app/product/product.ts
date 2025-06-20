import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product implements OnInit {
  products: any;

  constructor() { }

  ngOnInit(): void {
    this.products = [
      { id: 1, name: "Dell XPS 15", price: 1499, selected: true },
      { id: 2, name: "MacBook Pro 14\"", price: 1999, selected: true },
      { id: 3, name: "Lenovo ThinkPad X1", price: 1299, selected: false },
      { id: 4, name: "HP Spectre x360", price: 1399, selected: true },
      { id: 5, name: "ASUS ROG Zephyrus", price: 1799, selected: false },
      { id: 6, name: "Acer Predator", price: 1599, selected: false },
    ]
  }

  handleDelete(product: any) {
    let answer = confirm("Are you sure you want to delete (" + product.name + ") from product list")
    if (answer) {
      this.products = this.products.filter((p: any) => p.id != product.id)
    }
  }

  handleSelected(product: any) {
    if (product.selected) {
      product.selected = false
    } else {
      product.selected = true
    }
  }
}