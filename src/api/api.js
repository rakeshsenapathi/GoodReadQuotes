import _quotes from './quotes';

//const TIMEOUT = "";

const url = "http://localhost:3000/getQuotes";

function fetchData(cb) {
    fetch(url)
        .then(response => response.json())
        .then(json => cb(json))
        .catch(function (e) {
            console.log(e);
        })
}

export default {
    // getQuotes: (cb, timeout) => setTimeout(() => cb(_quotes), timeout || TIMEOUT)
    getQuotes: (cb) => fetchData(cb)
}
