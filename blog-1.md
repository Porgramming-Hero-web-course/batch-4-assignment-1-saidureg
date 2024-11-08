# Significance of union and intersection types in Typescript

## Union Types (`|`)

Union types in TypeScript allow us to define a variable or parameter that can hold values of multiple types. To create a union type, use the `|` operator between the types within parentheses.

### Code Example

let value: string | number;
value = "Hello"; // valid
value = 42; // valid
value = true; // Invalid

###Significance

1. **Flexibility**: Union types enable more flexibility in handling variables that could be of different types.
2. **Type narrowing**: TypeScript can narrow down the possible types of a union type using type guards ( `typeof`, `instanceof`).

## Intersection Types (`&`)

An intersection type combines multiple types into a single type, representing the combination of all types. It is represented using the `&` operator. This is useful when you want to create more complex types by combining multiple characteristics.

### Code Example

interface A {
name: string;
}
interface B {
age: number;
}

let person: A & B = { name: "Alice", age: 30 }; // valid
let invalidPerson: A & B = { name: "Alice" }; // Error: Property 'age' is missing

###Significance

1. **Combining types**: Intersection types allow you to create new types by combining multiple interfaces or types.
2. **Ensuring all properties are present**: When using intersection types, the resulting object must include all properties from all types involved.

```

```
