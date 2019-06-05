export const fetchRobots = (url) => {
    return fetch(url)
        .then(data => data.json())
}