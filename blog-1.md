# Understanding Union and Intersection Types in TypeScript

In TypeScript, union and intersection types are powerful tools for handling complex data structures and improving type safety. Here's an overview of their significance:

## Union Types (`|`)

A union type allows a variable to hold values of different types, meaning a value can be one of several types. This is particularly useful when you need to handle values that could be from different types but still want to ensure type safety.

### Code Example

````typescript
// Syntax
let value: string | number;
value = "Hello";  // valid
value = 42;       // valid
value = true;     // Error: Type 'boolean' is not assignable to type 'string | number'

###Significance

1. **Flexibility**: Union types enable more flexibility in handling variables that could be of different types.
2. **Error prevention**: TypeScript ensures that only the specified types are assigned, helping to avoid runtime errors.
3. **Type narrowing**: TypeScript can narrow down the possible types of a union type using type guards (like `typeof`, `instanceof`, etc.).


## Intersection Types (`&`)

An intersection type combines multiple types into one. A value of an intersection type must conform to all of the combined types. This is useful when you want to create more complex types by combining multiple characteristics.

### Code Example

```typescript
// Syntax
interface A {
  name: string;
}
interface B {
  age: number;
}

let person: A & B = { name: "Alice", age: 30 };  // valid
let invalidPerson: A & B = { name: "Alice" };    // Error: Property 'age' is missing


###Significance
1. **Combining types**: Intersection types allow you to create new types by combining multiple interfaces or types.
2. **Ensuring all properties are present**: When using intersection types, the resulting object must include all properties from all types involved.
3. **Type composition**: They are useful for composing more granular and reusable types, especially when multiple behaviors or properties need to be combined into one object.
````
