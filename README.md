1) What is the difference between null and undefined?

JavaScript-এ null এবং undefined উভয়েই কোনো ভ্যালু বা মানের অনুপস্থিতি নির্দেশ করে, কিন্তু তাদের ব্যবহারের উদ্দেশ্য ভিন্ন। undefined মানে ভেরিয়েবলটি ডিক্লেয়ার করা হয়েছে কিন্তু ভ্যালু দেওয়া হয়নি । অন্যদিকে, null হলো একটি অ্যাসাইন করা ভ্যালু, যা প্রোগ্রামার নিজে ইচ্ছাকৃতভাবে "খালি" বা "কিছু নেই" বোঝাতে ব্যবহার করেন।

2) What is the use of the map() function in JavaScript? How is it different from forEach()? 

map() function এর ব্যবহার:
map() হলো JavaScript-এর একটি array method, যা প্রতিটি element-এর উপর একটি function apply করে নতুন array তৈরি করে।

ব্যবহার উদাহরণ:
const numbers = [1, 2, 3, 4];
const squares = numbers.map(num => num * num);
console.log(squares);

map() vs forEach():

বিষয়	                  map()	                     forEach()
Return value	        নতুন array	               কিছু return করে না (undefined)
মূল array পরিবর্তন	    না (immutable)	             না (যদি explicitly পরিবর্তন না করা হয়)
ব্যবহার	                যখন নতুন array দরকার	   যখন শুধু iteration বা side-effect দরকার
Example	       const squares = arr.map(x => x*x);	arr.forEach(x => console.log(x));


3) What is the difference between == and ===?

1️. == (Double Equals) – Equality Operator
== value compare করে, কিন্তু type ignore করে
অর্থাৎ যদি দুইটির value সমান হয়, type আলাদা হলেও true return করবে
উদাহরণ:
console.log(5 == "5");  // true, কারণ value সমান, type ignored
console.log(0 == false); // true, 0 কে false হিসেবে treat করে

2️. === (Triple Equals) – Strict Equality Operator
=== value এবং type দুটোই compare করে
শুধুমাত্র তখনই true return করবে যখন value এবং type দুটোই এক হয়

উদাহরণ:
console.log(5 === "5"); 
console.log(0 === false); 
console.log(5 === 5); 

4) What is the significance of async/await in fetching API data?

1.Async/Await কী?
async এবং await হলো JavaScript এর modern way asynchronous code handle করার জন্য।
Normally, API call বা network request সময় নেয় → asynchronous কাজ।
async/await use করলে code synchronous এর মতো লেখা যায়, কিন্তু non-blocking থাকে।

2️. Significance / গুরুত্ব
Readable and Cleaner Code
Promise chains (.then().catch()) এর পরিবর্তে
async/await use করলে code সহজ, line-by-line style, সহজে debug করা যায়

// With promises
fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

// With async/await
const loadProducts = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    console.log(data);
  } catch(err) {
    console.error(err);
  }
}


Handle Asynchronous Operations Sequentially
একের পর এক API call করতে চাইলে async/await সহজ করে
const getProductsAndUsers = async () => {
  const products = await fetchProducts();
  const users = await fetchUsers();
  console.log(products, users);
}

Error Handling becomes easier
try/catch block দিয়ে error catch করা সহজ
try {
  const res = await fetch(url);
} catch(err) {
  console.error("API failed", err);
}


5) Explain the concept of Scope in JavaScript (Global, Function, Block).

1️. Scope কী?
Scope হলো একটা container যেখানে variable, function বা object access করা যায়।
অর্থাৎ কোথা থেকে কোন variable ব্যবহার করা যাবে সেটা নির্ধারণ করে Scope।
JavaScript এ মূলত ৩ ধরনের Scope আছে:

2️. Global Scope (গ্লোবাল স্কোপ)
Global scope-এ declare করা variable সারা program এ access করা যায়।
Browser এ var/let/const global scope-এ declare করলে, এটি window object-এর property হয়ে যায় (var) বা global context এ থাকে (let/const)।

3️. Function Scope (ফাংশন স্কোপ)
Function scope মানে variable শুধুমাত্র ওই function-এর ভিতর accessable
Function এর বাইরে সেই variable দেখা যায় না

4️. Block Scope (ব্লক স্কোপ)
Block scope হলো { ... } এর ভিতরে থাকা scope
let এবং const block scoped, কিন্তু var block scoped নয় (var function scoped)।