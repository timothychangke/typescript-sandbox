export {};

// A generic class is when the type of parameter input is not of importance
class Storage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {

    this.data.splice(this.data.indexOf(item), 1);
  }
  getItems() {
    return [...this.data];
  }
}

// all these operations would work if the storage is set to string where the T in the generic stands for string
const textStorage = new Storage<string>();
textStorage.addItem('Max');
textStorage.addItem('James');
textStorage.removeItem('James');
console.log(textStorage.getItems());

// we give typescript flexibility, but still make a strongly typed class
const numberStorage = new Storage<number>();
numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.removeItem(2);
console.log(numberStorage.getItems());

// however, because objects are referenced types in javascript, the indexOf({name: "Max"}) for example would not work as objects are saved as addresses in memory
// a workaround is to have T to extend only strings, numbers and booleans, leaving out objects
// note that this is different from using union types as generics specify that only that one type (either string, number or boolean) is allowed and must be uniformed thorought
// the union type in this case means that any of the three are allowed at all times