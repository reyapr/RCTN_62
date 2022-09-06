import axios from 'axios'

axios('https://swapi.dev/api/people')
    .then(result => result.data.results.filter(data => data.height > 165))
    .then(result => {
        console.log(result, `<=================== result ==================`);
    })
    .catch(err => {
        console.log(err, `<=================== err ==================`);
    })



const res = 1 + 2
console.log(res, `<===================  ==================`);