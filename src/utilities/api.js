const URL = 'https://restcountries.com/v3.1/name/{text}?fullText=false'

export const getData = (text) => {
    try {
        return fetch(URL.replace('{text}', text));
    } catch (err) {
        console.error(err);
    }
}