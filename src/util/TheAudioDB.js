const apiUrl = 'https://theaudiodb.com/api/v1/json/2/album.php?m=2115888';

//https://theaudiodb.com/api/v1/json/2/album.php?m=2115888 


export default async function search() {


    const response = await fetch(apiUrl);

    // Parsing it to JSON format
    const data = await response.json();
    console.log(data.results);
}