class ProductManager {
  constructor() {
    this.products = [];
    this.productIdCounter = 0;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.error(`
      All product properties are required to add a new Product
      `);
    } else if (this.products.some((prod) => prod.code === code)) {
      console.error(`
      You can't add two products with the same code
      `);
    } else {
      const id = this.productIdCounter++;
      this.products.push(
        new Product(title, description, price, thumbnail, code, stock, id)
      );
      console.log(
        `
      The product "${title}" has been added correctly with the id: "${id}".
      `
      );
    }
  }
  getProducts() {
    return console.log(this.products);
  }

  getProductById(id) {
    const product = this.products.find((prod) => prod.id === id);
    if (product) {
      console.log(
        `
      Product with id: "${product.id}" found with name: "${product.title}"
      `
      );
    } else {
      console.error(`
      Product not found
      `);
    }
  }
}

class Product {
  constructor(title, description, price, thumbnail, code, stock, id) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock;
    this.id = id;
  }
}

//Creating a ProductManager
const Manager = new ProductManager();

//Calling getProducts before adding any product (should return an empty array)
Manager.getProducts();

//Adding a test product with addProduct method
//Shound log on console that the product has been added
Manager.addProduct(
  "producto prueba",
  "Este es un producto prueba",
  200,
  "Sin imagen",
  "abc123",
  25
);

//Verifying product has been added correctly
//Should return an array with the product added on previus step
Manager.getProducts();

//Verifying that is not possible to add two products with same code
//Should return an error message on console
Manager.addProduct(
  "producto prueba",
  "Este es un producto prueba",
  200,
  "Sin imagen",
  "abc123",
  25
);

//Verifying that all product properties are required to add a new product
//Should return an error message on console
Manager.addProduct(
  "producto prueba",
  "Este es un producto prueba",
  200,
  "Sin imagen",
  "abc123"
);

//Adding a second product to the array to tests Id generation
Manager.addProduct(
  "test product",
  "This is a test product",
  200,
  "No image",
  "CBA321",
  5
);

//Verifying error response for getProductById
//Should return an error message on console
Manager.getProductById(2);

//Verifying response if product found by Id
//Should return a message with the product id and name
Manager.getProductById(1);
