import { Gifs } from "../models/gifs.model";
import { Image } from "../models/img.model";


export const getGifs = async( category: any ) => { 
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI( category )}&limit=10&api_key=DVWTDJbYhlD3dEjKZh9LlVh62UIedVSu`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs: Gifs = data.map( (img: Image) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    console.log( JSON.stringify( gifs));


    return gifs;
}