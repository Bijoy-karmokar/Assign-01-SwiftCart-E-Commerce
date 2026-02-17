const loadCategories=async()=>{
   const res = await fetch('https://fakestoreapi.com/products/categories');
   const data = await res.json();
   displayCategories(data);
}
const displayCategories = (categories) => {
    const allCategories = document.getElementById("all-categories");
    allCategories.innerHTML = "";

    // Create ALL button first
    const allBtn = document.createElement("button");
    allBtn.innerText = "All";
    allBtn.classList.add("btn", "rounded-3xl");

    allBtn.addEventListener("click", () => {
        loadAllProducts();
    });

    allCategories.appendChild(allBtn);

    categories.forEach(category => {
        const button = document.createElement("button");
        button.innerText = category;
        button.classList.add("btn", "rounded-3xl");

        button.addEventListener("click", () => {
            loadProductCate(category);
        });

        allCategories.appendChild(button);
    });
}


const loadAllProducts=async()=>{
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    displayAllProduct(data);
    
}
const displayAllProduct = (products)=>{
    // console.log(products);
    const allCategory = document.getElementById('all-category');
    allCategory.innerHTML=""
    products.forEach(product=>{
        // console.log(product);
        
        const createDiv = document.createElement('div');
        createDiv.innerHTML=`
          <div class="card bg-base-100 shadow-md">
            <figure class="bg-gray-200">
              <img
                src=${product.image}
                class="w-44 h-50 p-4"
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
              <div class="flex justify-between items-center font-semibold gap-16 w-full">
                <div class="badge badge-soft badge-primary">${product.category}</div>
                <p>${product.rating.rate} (${product.rating.count})</p>
              </div>
              <p class="truncate font-semibold"> 
                ${product.title}
              </p>
              <p class="font-semibold">$ ${product.price}</p>
              <div class="card-actions justify-between">
                <div class="btn px-5">
                  <i class="fa-regular fa-eye"></i> Details
                </div>
                <div class="btn btn-primary px-5">
                  <i class="fa-solid fa-cart-shopping"></i> Add
                </div>
              </div>
            </div>
          </div>
        `
        allCategory.append(createDiv);
    })
}

const loadProductCate =async(category)=>{
      const res = await fetch(`https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`);
      const data = await res.json();
      displayProducts(data);
      
}

const displayProducts=(products)=>{
    console.log(products);
    
}

loadCategories()