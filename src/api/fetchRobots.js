export const fetchRobots = (url) => {
    fetch(url)
        .then(data => data.json());
}