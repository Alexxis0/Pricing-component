let selectPricingBtn = document.querySelector(".section_select_pricing_btn");
let selectPricingBtnClick = document.querySelector(".section_select_pricing_btn_click");
let check = document.querySelector(".check");
let priceBasic = document.querySelector(".price_basic");
let priceProfessional = document.querySelector(".price_professional");
let priceMaster = document.querySelector(".price_master");

function togglePrice() {
    if (check.checked) {
        priceBasic.textContent = "$19.99";
        priceProfessional.textContent = "$24.99";
        priceMaster.textContent = "$39.99";
    } else {
        priceBasic.textContent = "$199.99";
        priceProfessional.textContent = "$249.99";
        priceMaster.textContent = "$399.99";
    }
}

selectPricingBtn.addEventListener("click", () => {
    selectPricingBtnClick.classList.toggle("section_select_pricing_btn_click_toggle");
    togglePrice();
});
