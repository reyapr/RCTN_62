const getData = (response) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let isSuccess = response;
            
            if(isSuccess) {
                resolve('Success')
            } else {
                reject('Failed')
            }
        }, 2000);
    })
}

let response = null;
getData(true)
    .then((res) => {
        if(res.length > 0) {
            throw new Error('err')
        }
        return res + ' Second Action'
    })
    .then(res => {
        console.log(res, `<=================== res ==================`);
    })
    .catch((err) => {
        console.log(err, `<=================== err ==================`);
    })


const result = 1 + 2
console.log(result, `<=================== result ==================`);