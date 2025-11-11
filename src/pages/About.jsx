import React from 'react'
import Navbar from '../components/others/Navbar'
import InfiniteScroll from '../components/InfiniteScroll/InfiniteScroll'

function About() {
    const items = [
        { content: "(1). Mai Kya hi Khu..?" },
        { content: <p>"Uske chehre ki wo halki si smile… jaise subah ki pehli roshni — dil ko sukoon de jaati hai ☀️✨"</p> },
        { content: "(2). Lo Suno Fir..." },
        { content: <p>“Kabhi kabhi lagta hai wo koi insaan nahi, ek khubsurat reason hai muskurane ka 💫💛 "</p> },
        { content: "(3). Aur Sach khu To.." },
        { content: <p>"Bas uska saath mil jaaye, toh chaos bhi comfort ban jaata hai 💫🌿”"</p> },
        { content: "(4). Aur Sun.." },
        { content: <p>"Woh jab baat karti hai na, lagta hai har lafz usne mere liye likha ho — simple, par seedha dil ke andar tak 💫😉"</p> },
        { content: "(5). Aur Sun.." },
        { content: <p>"“Uski aankhon mein kuch toh baat hai — bina keh ke hi dil chura leti hain 😏✨”"</p> },
        { content: "(6). Aur Sun.." },
        { content: <p> "Suna sabne, samjha sirf usne 💖
                        Vo dil se sunne wali hai,
                        aur dil chura lene wali bhi 😏"</p> },
        { content: "(7). Ab thoda jhut 😁" },
        { content: <p>"Uski energy mein ek calm magic hai 🌿,
                       har gesture mein kindness,
                       aur sabse pyaari baat — sab kuch bilkul asli, bina mask ke 💖"</p> },
    ];


    return (
        <>
            <div className="w-full h-auto bg-[#fefae0]">
                <Navbar />
                  


                <div className="h-[85vh] w-100vw mt-22 relative ">
                    <div className="flower-area w-full h-50  absolute  z-[77] top-0"
                    style={{
                        backgroundImage: `url("./src/assets/flowers/Flowere_FLip.png")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                    >
                       
                    </div>
                    
                   <InfiniteScroll
                    items={items}
                    isTilted={true}
                    tiltDirection='left'
                    autoplay={true}
                    autoplaySpeed={1.5}
                    autoplayDirection="up"
                    pauseOnHover={true}
                />
                </div>
            </div>

        </>
    )
}

export default About


