import React from "react";
import memesData from "./memesData";

export default function Meme() {

   // const [memeImage, setImage] = React.useState("https://i.imgflip.com/30b1gx.jpg");
    const [meme, setImage] = React.useState({
        topText : "",
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

    function handleChange(event) {
        const {name,value} = event.target
        setImage(prevImage => ({
            ...prevImage,
            [name] : value
        }))
    }

    


    return (
        <main>
            <div className="form">
                <input
                 type="text"
                 placeholder="Top-text"
                 className="form--input"
                 name="topText"
                 value={meme.topText}
                 onChange={handleChange}

                 />
                <input type="text"
                placeholder="Bottom--text"
                className="form--input"
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
                />
                <button
                className="form--button" 
                onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
           
           <div className="meme">
           <img src={meme.randomImage} alt="pics" className="meme--image"/>
           <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
           </div>
          
          
        </main>
    )
}