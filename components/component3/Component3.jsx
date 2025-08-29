import { useState } from "react";

const Component3 = ({optionsArr, selectedValue}) => {

    const [obj, setObj] = useState({})  


    return(
        <div className="component-3">
            <select >
                {
                    (!selectedValue || selectedValue === "")
                        ? <option value="" selected disabled>Pick an item...</option>: null
                }
                {
                    optionsArr.map((opt, index) => (
                        <option key = {index} 
                        {...(opt.value === selectedValue ? {selected: true} : {})}
                         value={opt.value}>{opt.name}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default Component3;