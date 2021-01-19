export const getGif = async (category, limit) => {
    
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
        category
    )}&limit=${limit}&api_key=acVf25n0dfnwMkrs0g3RaydjUqB5CV4c&offset=2`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gif = data.map((img) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url,
        };
    });
    return gif;
};
