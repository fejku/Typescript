import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";

const numbersCollection = new NumbersCollection([1, 0, -5, 10]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(sorter.collection);
