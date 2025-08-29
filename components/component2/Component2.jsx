import { useState, useRef, useEffect } from "react";
import Component1 from "../component1/Componet1";




function isImage(filePath)
{
    if (!filePath) return false;


    
    const extension = filePath.split('.').pop().toLowerCase();
    const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'heic'];

    return imageExtensions.includes(extension);
}

function imageAlt(imageName, description)
{
    let alt = imageName;
    if (description !== "")
    {
        alt = description;
    }
    
    return alt;
}

const Component2 = ({fileArr}) => {

    const [imagePath, setImagePath] = useState("");
    const [imageName, setImageName] = useState("");
    const [description, setDescription] = useState("");

    const [comp1Width, setComp1Width] = useState("auto");

    const comp1Ref = useRef(null);


    useEffect(() => {
        if (comp1Ref.current) {
            setComp1Width(comp1Ref.current.offsetWidth);
        }
    }, []);


    const label1 = "Images per selected item";
    const label2 = "Images";

    return(
        <div>
            <div ref={comp1Ref}>
                <Component1 options_arr={fileArr} setItem={setImagePath} setInputText={setImageName} setDescription = {setDescription} label1={label1} label2={label2}/>
            </div>
            {isImage(imagePath) && <img src={imagePath} alt={imageAlt(imageName, description)} style={{ width: comp1Width }} />}
        </div>
    )
}

export default Component2;