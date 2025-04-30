import products from "./products.json";

class Product {
  constructor(id: number, name: string, price: number) {
    this.id = id; // Asignar ID desde el JSON
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;

  static findProductsBelow(precioBase: number) {
    // Filtrar productos cuyo precio sea menor al precioBase y crear instancias de Product
    return products
      .filter((product: { price: number }) => product.price < precioBase)
      .map(product => new Product(product.id, product.name, product.price)); // Crear instancias de Product
  }
}

class User {
  constructor(name: string) {
    this.name = name;
  }
  name: string;
  products: Product[] = [];
  
  addProduct(newProduct: Product) {
    this.products.push(newProduct);
  }
  
  addProducts(newProducts: Product[]) {
    // Usando un bucle para agregar cada producto individualmente
    newProducts.forEach(product => {
      this.products.push(product);
    });
  }
}

export { User, Product };
