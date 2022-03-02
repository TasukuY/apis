
let button = document.querySelector("button");
let body = document.querySelector("body");
let baseEndpoint = 'https://swapi.dev/api/planets/';
let searchEndpoint = '?search=alderaan';

let pushButton = () => {
    // console.log('button pushed');
    axios.get(baseEndpoint+searchEndpoint)
    .then(res => {
        // console.log(res.data.results[0].residents);
        let residents = res.data.results[0].residents;
        for(let i = 0; i < residents.length; i++){
            let residentEndpoint = residents[i];
            axios.get(residentEndpoint)
                .then(res => {
                    // console.log(res.data.name);
                    const name = res.data.name;
                    const h2 = document.createElement('h2');
                    const node = document.createTextNode(name);
                    h2.appendChild(node);
                    body.appendChild(h2);
                })
                .catch(err => console.log(`ERROR: ${err}`))
            // "https://swapi.dev/api/people/5/",
            //     "https://swapi.dev/api/people/68/",
            //     "https://swapi.dev/api/people/81/"
        }
    })
    .catch(err => console.log(`ERROR: ${err}`))
}

button.addEventListener('click', pushButton);
