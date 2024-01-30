let consts = {
    pricing: [150, 175, 200],
    glassProfit: 50,
    tax: 10.1
}

function getReplacementPrice(pricingArray, index) {
    return pricingArray[index - 1];
}
function getAccessoriesPrice(className) {
    let accessoriesPriceArray = document.querySelectorAll(className);
    let accessoriesSum = 0;

    for (let elem of accessoriesPriceArray) {
        accessoriesSum += Number(elem.value);
    }
    return accessoriesSum;
}

function getSubTotal(replacementPrice, glassPrice, accessoriesPrice) {
    let sum = 0;
    for (let elem of arguments) {
        sum += Number(elem);
    }
    return sum + consts.glassProfit;
}

function getTotal(subTotal) {
    let total = subTotal + ((subTotal * consts.tax / 100));
    return total.toFixed(2);
}



let buttonGetEstimate = document.getElementById('getEstimate');

buttonGetEstimate.addEventListener('click', function () {

    let vehicleModel = document.getElementById('vehicleModel').value;
    let replacementPrice = getReplacementPrice(consts.pricing, Number(document.getElementById('vehicleType').value));
    let glassPrice = document.getElementById('glassPrice').value;
    let accessoriesPrice = getAccessoriesPrice('.accessory');
    let glassAndAccessoriesAndProfitPrice = Number(glassPrice) + accessoriesPrice + consts.glassProfit;

    let total = getTotal(getSubTotal(glassPrice, accessoriesPrice, replacementPrice));

    let summary_vehicleModel = document.getElementById('summary_vehicleModel');
    let summary_glassAndMoldingPrice = document.getElementById('summary_glassAndMoldingPrice');
    let summary_replacementPrice = document.getElementById('summary_replacementPrice');
    let summary_tax = document.getElementById('summary_tax');
    let summary_total = document.getElementById('summary_total');
    
    summary_vehicleModel.textContent = vehicleModel;
    summary_glassAndMoldingPrice.textContent = `Glass & Molding: $${glassAndAccessoriesAndProfitPrice}`;
    summary_replacementPrice.textContent = `Replacement: $${replacementPrice}`;
    summary_tax.textContent = `Tax: ${consts.tax}%`;
    summary_total.textContent = `Total: $${total}`;

});

