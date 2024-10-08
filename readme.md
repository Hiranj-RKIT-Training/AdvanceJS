## **Readme: JavaScript Advanced Concepts**

Check out the live version of the project here: [Live Demo](https://hiranj-rkit-training.github.io/AdvanceJS/)

### **1. Advanced Concepts**

#### **1.1. Session Storage & LocalStorage**
* **Session Storage:** Stores data for a single session. Data is lost when the browser window is closed.
* **Local Storage:** Stores data persistently on the user's device. Data is retained even after the browser is closed.

```js
// Set data in session storage
sessionStorage.setItem('username', 'john_doe');

// Get data from session storage
let username = sessionStorage.getItem('username');

// Remove data from session storage
sessionStorage.removeItem('username');

// Set data in local storage
localStorage.setItem('user_preferences', JSON.stringify({ theme: 'dark' }));

// Get data from local storage
let preferences = JSON.parse(localStorage.getItem('user_preferences'));
```


#### **1.2. Basics of Cookies**
* Small text files stored on the user's device by a web server.
* Used to store information about the user's preferences, session data, etc.
* Can be set with expiration dates and paths.

#### **1.3. Browser Debugging**
* **Inspect Element Window:**
    * Access the HTML structure, CSS styles, and JavaScript code of a web page.
* **Tabs in Inspect Element Window:**
    * **Elements:** Inspect the HTML structure and apply CSS styles.
    * **Console:** Execute JavaScript code and view console messages.
    * **Sources:** View and debug JavaScript files.
    * **Network:** Analyze network requests and responses.
    * **Performance:** Measure performance metrics and identify bottlenecks.
* **Caching:**
    * Storing frequently accessed resources locally to improve performance.
    * Can be controlled using HTTP headers and browser settings.

### **2. OOJS Study**

#### **2.1. What is OOJS?**
* Object-Oriented JavaScript (OOJS) is a programming paradigm that models real-world entities as objects, which have properties and methods.

#### **2.2. Possible Ways to Implement Class**
* **Constructor functions:** Using the `new` keyword to create objects from a function.
* **ES6 classes:** A more syntax-friendly approach using the `class` keyword.

```js
// Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// ES6 class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
```

#### **2.3. Static class, Properties declaraiton**
* **Static properties:** Belong to the class itself, not individual instances.
* **Property declaration:** Using the `this` keyword within a method to access instance properties.
```js
class MathUtils {
  static PI = 3.14159;

  static calculateArea(radius) {
    return this.PI * radius * radius;
  }
}
```

### **3. ECMAScript6**

#### **3.1. Difference between let, var & const**
* **let:** Block-scoped variable. Can be reassigned but not redeclared within the same scope.
* **var:** Function-scoped variable. Can be reassigned and redeclared.
* **const:** Block-scoped constant. Cannot be reassigned or redeclared.

```js
// let: block-scoped
{
  let x = 10;
}

// var: function-scoped
function myFunction() {
  var y = 20;
}

// const: block-scoped and cannot be reassigned
const z = 30;
```

#### **3.2. JavaScript Classes**
* A more structured way to define objects and their properties and methods.
* Uses the `class` keyword and `constructor` method.
```js
class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  bark() {
    console.log('Woof!');
  }
}
```

#### **3.3. Arrow functions**
* A concise syntax for defining functions.
* Automatically bind the `this` context.

```js
const greet = (name) => {
  console.log('Hello, ' + name);
};

const double = (num) => num * 2;
```

#### **3.4. Import, Export, async, await Functions**
* **Import, Export:** Modules can be imported and exported for code organization and reusability.
* **async, await:** Simplifies asynchronous programming by making it look synchronous.

```
// module1.js
export const greet = (name) => {
  console.log('Hello, ' + name);
};

// module2.js
import { greet } from './module1.js';

greet('John');

// async/await example
async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  console.log(data);
}
```

### **4. Extra Points**

#### **4.1. Difference between == & ===, != & !===**
* **==:** Loose equality operator. Performs type conversion if necessary.
* **===:** Strict equality operator. Does not perform type conversion.
* **!=:** Loose inequality operator.
* **!==:** Strict inequality operator.

```js
// Loose equality (==)
console.log(10 == '10'); // true

// Strict equality (===)
console.log(10 === '10'); // false
```
