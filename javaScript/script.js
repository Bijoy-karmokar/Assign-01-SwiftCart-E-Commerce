const loadCategories=async()=>{
   const res = await fetch('https://fakestoreapi.com/products/categories');
   const data = await res.json();
   displayCategories(data);
}

const manageSpinner = (status)=>{
     if(status == true){
       document.getElementById("spinner").classList.remove('hidden');
       document.getElementById("all-category").classList.add('hidden');
     }else{
       document.getElementById("all-category").classList.remove('hidden');
       document.getElementById("spinner").classList.add('hidden');
     }
}
const displayCategories = (categories) => {
    const allCategories = document.getElementById("all-categories");
    allCategories.innerHTML = "";
    // Create ALL button first
    const allBtn = document.createElement("button");
    allBtn.innerText = "All";
    allBtn.classList.add("btn", "rounded-3xl","category-btn");

    allBtn.addEventListener("click", () => {
          document.querySelectorAll(".category-btn")
            .forEach(btn => btn.classList.remove("active"));

        // Add active to clicked button
        allBtn.classList.add("active");
        loadAllProducts();
    });

    allCategories.appendChild(allBtn);

    categories.forEach(category => {
        const button = document.createElement("button");
        button.innerText = category;
        button.classList.add("btn", "rounded-3xl","category-btn");
        
        button.addEventListener("click", () => {
             // Remove active from all buttons
        document.querySelectorAll(".category-btn")
            .forEach(btn => btn.classList.remove("active"));

        // Add active to clicked button
        button.classList.add("active");
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
                <p><i class="fa-solid text-yellow-400 fa-star"></i> ${product.rating.rate} (${product.rating.count})</p>
              </div>
              <p class="truncate font-semibold"> 
                ${product.title}
              </p>
              <p class="font-semibold">$ ${product.price}</p>
              <div class="card-actions justify-between">
                <div onclick="loadSingleProduct(${product.id})" class="btn px-5">
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
    manageSpinner(true)
      const res = await fetch(`https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`);
      const data = await res.json();
      displayProducts(data);
      
}

const displayProducts=(products)=>{
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
                <p><i class="fa-solid text-yellow-400 fa-star"></i> ${product.rating.rate} (${product.rating.count})</p>
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
    manageSpinner(false)
}


// details page
const loadSingleProduct =async(id)=>{
     const res = await fetch(`https://fakestoreapi.com/products/${id}`);
     const data = await res.json();
     displaySingleProduct(data);
     
}
const displaySingleProduct = (singleProduct)=>{
    // console.log(singleProduct);
    const detailsContainer = document.getElementById("details-container");
    detailsContainer.innerHTML=`
        <div class="space-y-4">
         <h3 class="font-medium"><span class="text-lg font-bold">Title</span>:<br/> ${singleProduct.title}</h3>
         <p class=" font-medium"><span class="text-lg font-bold">Description</span>: <br/> ${singleProduct.description}</p>
         <div class="flex justify-between items-center gap-6 text-lg font-semibold">
          <p>Price:$ ${singleProduct.price}</p>
          <p>Rating:<i class="fa-solid text-yellow-400 fa-star"></i> ${singleProduct.rating.rate} (${singleProduct.rating.count})</p>
         </div>
         <button class="btn btn-primary">Buy Now</button>
      </div>
    `;
    document.getElementById('product_modal').showModal();
}

document.addEventListener("DOMContentLoaded", () => {
    loadCategories();
});