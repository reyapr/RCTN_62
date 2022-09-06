import axios from 'axios'

axios('https://swapi.dev/api/people')
    .then(result => result.data.results.filter(data => data.height > 165))
    .then(result => {
        // console.log(result, `<=================== result ==================`);
    })
    .catch(err => {
        // console.log(err, `<=================== err ==================`);
    })

const fetchData = async () => {
    try {
        const result = await axios('https://swapi.dev/api/peop2le')
        const heightAbove165 = result.data.results
            .filter(data => data.height > 165)
        return heightAbove165
    } catch(err) {
        throw err
    }
    
    
    
}

const showData = async () => {
   try {
    const filteredData = await fetchData()
    console.log(filteredData, `<=================== filteredData ==================`);
   } catch (error) {
    console.log(error, `<=================== err ==================`);
   }
}
  
showData()  

const res = 1 + 2
console.log(res, `<===================  ==================`);