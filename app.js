const ui = new UI();
const cryptoAPI = new CryptoAPI();

// Create the variables

const form = document.getElementById('form');


// Add event listener
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // read currency
    const currencySelect = document.getElementById('currency').value;
    // read cryptocurrency
    const cryptoCurrencySelect = document.getElementById('cryptocurrency').value;

    // Validate that the selects have something
    if (currencySelect === '' || cryptoCurrencySelect === '') {
        // display an error
        ui.printMessage('All the fields need to have a selection', 'deep-orange darken-4 card-panel');
    } else {
        // Query the REST API
        cryptoAPI.queryAPI(currencySelect, cryptoCurrencySelect)
            .then(data => {
                ui.displayResult(data.result[0], currencySelect);
            })
    }
})
