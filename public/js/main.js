const dataApi = fetch("https://jsonplaceholder.typicode.com/photos")

dataApi
    .then(async(responseData) => {
        //console.log(responseData);

        const response = await responseData.json();
        console.log(response[0]);

        try {
            //Objet 0 capture data API avec les 2 photos
            const albumId = response[0].albumId;
            const id = response[0].id;
            const thumbnailUrl = response[0].thumbnailUrl;
            const title = response[0].title;
            const url = response[0].url

            console.log(albumId);
            console.log(id);
            console.log(thumbnailUrl);
            console.log(title);
            console.log(url);

        } catch (error) {
            console.log(error);
        }
    })