function renderItem() {
    
    const storedItem = localStorage.getItem("product");
  

    if (storedItem) {

      const selectedItem = JSON.parse(storedItem);
  

      render(selectedItem);
    } else {
      console.log("erros");
    }
}
  
const productGwap = document.querySelector(".product-gwap")
function render(item) {
    const product = () => {
        return ` 
        <h1 class="title-product">
        ${item.title}
        </h1>
        <div class="date">
            14/2/2023
        </div>
        <div class="img-product">
            <img src="${item.img}" alt="" class="img-link__product">
        </div>
        <h3 class="title-des">Chi tiết chương trình</h3>
        <p class="des-product">
            ${item.description}
        </p>
        
        
        `
    }
    productGwap.innerHTML = product()
  }
  

renderItem();