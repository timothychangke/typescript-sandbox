import _ from 'lodash';
import { Product } from './product.model';

import 'reflect-metadata';
import { plainToClass } from 'class-transformer';

import { validate } from 'class-validator';

console.log(_.shuffle([1, 2, 3]));

// there are many libraries that are built on javascript in which typescript cannot interpret
// go to the github of definitelytyped to find javascript to typescript translations of most popular libraries
// they always start with @types/ ...

// for the worst case, use declare
declare var GLOBAL: any;

// imagine these products are the outputs from the backend
const products = [
  { title: 'A Carpet', price: 29.99 },
  { title: 'A Book', price: 19.99 },
]; // you would have to manually set the types of these objects in order for typescript to manipulate its values

// manual transformation
const loadedProducts = products.map(
  (prod) => new Product(prod.title, prod.price)
);
// this is where the class transformer library is needed
const loadedProductsWithClassTransformer = plainToClass(Product, products);

const p1 = new Product('A Book', 12.99);
console.log(p1.getInformation);

const newProd = new Product('', -5.99);
// validate function validates for all checks and returns a promist
validate(newProd).then((errors) => {
  if (errors.length > 0) {
    console.log('VALIDATION ERRORS');
    console.log(errors);
  } else {
    console.log(newProd.getInformation());
  }
});
