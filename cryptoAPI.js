class CryptoAPI {
    // Query the REST API with a currency and cryptocurrency

    async queryAPI(currency, cryptocurrency) {
        // Query the URL
        const url = await fetch(`https://api.coinmarketcap.com/v1/ticker/${cryptocurrency}/?convert=${currency}`);
        // Return as JSON
        const result = await url.json();

        // Return the object
        return {
            result
        }
    }


    // Geet all the crypto currencies
    async getCryptoCurrenciesList() {
        const url = await fetch('https://api.coinmarketcap.com/v1/ticker/');

        // Return this as JSON

        const cryptoCurrencies = await url.json();

        // Return the object
        return {
            cryptoCurrencies
        }
    }
}