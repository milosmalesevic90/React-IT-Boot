export function getHero(){
    return fetch(`../utility/data`).then(res=> res.json());
}