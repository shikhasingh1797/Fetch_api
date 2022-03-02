const axios = require('axios');

axios.get('https://api.github.com/users').then(resp => {

    var data1=resp.data;
    console.log(data1)
    var fs=require("fs")
    const data2 = JSON.stringify(data1, null, 4)
    fs.writeFile('./myFile.json', data2, 'utf8', (err) => {
    if (err) {
        console.log("Error writing file");
    }
    else {
        console.log("🌸🌸🌸🌸 Your work has done 🌸🌸🌸🌸");
    }
})
});