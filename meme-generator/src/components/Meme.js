import React from "react";
import memesData from "./memesData";

export default function Meme() {

   // const [memeImage, setImage] = React.useState("https://i.imgflip.com/30b1gx.jpg");
    const [meme, setImage] = React.useState({
        topTex : "",
        bottomText : "",
        randomImage : "https://i.imgflip.com/30b1gx.jpg"
    });
    const [allMemesImages, setAllMemeImages] = React.useState(memesData);

   // console.log(memesData);
    function getMemeImage() {
        const memlen = allMemesImages.data.memes;
        const index = Math.floor((Math.random() * memlen.length))
       // return (memlen[index].url);
       const url = memlen[index].url; 
       setImage(prevImage => ({
           ...prevImage,
           randomImage : url
       }))
    }

    


    return (
        <main>
            <div className="form">
                <input
                 type="text"
                 placeholder="Top-text"
                 className="form--input"
                 />
                <input type="text"
                placeholder="Bottom--text"
                className="form--input"
                />
                <button
                className="form--button" 
                onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
           
           <img src={meme.randomImage} alt="pics" className="meme--image"/>
          
        </main>
    )
}