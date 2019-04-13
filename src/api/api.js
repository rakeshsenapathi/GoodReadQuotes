export const url = "http://localhost:3000/getQuotes";
export const url_getPopularQuotes = "http://localhost:3000/getPopularQuotes";
export const url_getQuotesByAuthor = "http://localhost:3000/author?authorName=";

function fetchData(cb) {
    fetch(url)
        .then(response => response.json())
        .then(json => cb(json))
        .catch(function (e) {
            console.log(e);
        })
}

function fetchPopularQuotes(cb) {

    fetch(url_getPopularQuotes)
        .then(response => response.json())
        .then(json => cb(json))
        .catch(function (e) {
            console.log(e);
        });

}

function fetchQuotesByAuthor(cb, name) {
    fetch("http://localhost:3000/author?authorName=" + name)
        .then(response => response.json())
        .then(json => cb(json))
        .catch(function (e) {
            console.log(e);
        });
}

export default {
    getQuotes: (cb) => fetchData(cb),
    sortPopularQuotes: (cb) => fetchPopularQuotes(cb),
    getQuotesByAuthor: (cb, name) => fetchQuotesByAuthor(cb, name)
}
