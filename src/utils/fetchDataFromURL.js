export const fetchDataFromUrl = url => {
    return fetch(url)
    .then(res => res.json())
    .then(data => { return data; })
    .catch(err => console.error(err));
}