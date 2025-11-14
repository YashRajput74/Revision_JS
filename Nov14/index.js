//Write an asynchronous function that takes an array of URLs and fetches each one in sequence, returning the response data for each. Use async/await

async function fetchUrls(urls){
    const results =[];
    for(let i;i<urls.length;i++){
        const res = await fetch(urls[i]);
        const data = await res.json();
        results.push(data);
    }
    return results;
}

const data =await fetchUrls(urls);//put urls as an array
console.log(data);