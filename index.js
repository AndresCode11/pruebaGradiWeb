const fetch = require('node-fetch');
const moment = require('moment');
require('dotenv').config({path: '.env'})


const API_ENDPOINT= 'devtestrecruitte'
const API_KEY= 'd156c699edcc98186dae8e6f9562d838'
const PASSWORD= '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'

const headers = {
    'Content-Type': 'application/json',
    'X-Shopify-Access-Token': PASSWORD
}

fetch('https://' +  API_ENDPOINT + '.myshopify.com/admin/api/2021-10/products.json', {method: 'GET', headers: headers })
    .then(res => res.text())
    .then(text => {
        let data = JSON.parse(text);

        // Filter Values
        const result = data.products.map((values)=>{
            let obj = {
                [values.title] : {
                    price: values.variants[0].price,
                    status: values.status,
                    created_at: moment(values.created_at).format('YYYY-MM-DD')
                }
            };
            return obj
        })

        console.log(result)
    });