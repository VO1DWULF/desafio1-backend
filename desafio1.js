class ProductManager {
    constructor() {
        this.products = [];
        this.nextId = 1;
    }

    addProduct(product) {
        if (!this.isProductValid(product)) {
            console.log("Error: Product is not valid");
            return;
        }

        if (this.isProductDuplicate(product.code)) {
            console.log("Error: The product code is already in use");
            return;
        }

        product.id = this.nextId++;
        this.products.push(product);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find((p) => p.id === id);
        if (product) {
            return product;
        } else {
            console.log("Error: Product not found");
        }
    }

    isProductValid(product) {
        return (
            product.title &&
            product.description &&
            product.price &&
            product.thumbnail &&
            product.code &&
            product.stock !== undefined
        );
    }

    isProductDuplicate(code) {
        return this.products.some((p) => p.code === code);
    }
}

const productManager = new ProductManager(); 

productManager.addProduct({
    title: "Item 1",
    description: "Item 1 description",
    price: 15,
    thumbnail: "/imgItem1.jpg",
    code: "i01",
    stock: 18,
});

productManager.addProduct({
    title: "Item 2",
    description: "Item 2 description",
    price: 12,
    thumbnail: "/imgItem2.jpg",
    code: "i02",
    stock: 25,
});

const products = productManager.getProducts();

const productList = productManager.getProducts()
console.log(productList)

/* const productId = productManager.getProductById (2)
console.log(productId)
 */


/* const noProduct = productManager.getProductById(9)
 */