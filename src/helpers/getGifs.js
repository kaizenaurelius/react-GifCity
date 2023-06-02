export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=rk91qAi6QSTajW6ZnIHaWkDcLTel7cLH&q=${ category }&limit=10`
    const resp = await fetch( url );
    const { data } = await resp.json();
    const giftsTaken = data.map( img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }) )
  
    console.log( resp );
    return giftsTaken
  }