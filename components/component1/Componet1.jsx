
const Component1 = ({options_arr,setItem, setInpuText, setDescription, label1,label2}) => {
    let label_1_options_count = options_arr.length;

    return (
        <div className="component-1" >
            <div className="section label-1">
                <div className="label_1_header">
                    <label htmlFor="label-1">{label1}:</label>
                    <div id="counter" >{label_1_options_count}</div>
                </div>

                <div className="select_wrapper">
                    <select name="label-1" onChange={(event) => setItem(event.target.value)}>
                        <option value="" selected disabled>Pick an item...</option>
                        {
                            options_arr.map((opt, index) => (
                                <option key = {index} value={opt}>{opt}</option>
                            ))
                        }
                    </select>
                </div>
            </div>

            <div className="section label-2">
                <label htmlFor="label-2">{label2}:</label>
                <div name="label-2">
                    <input type="text" onChange={(event) => setInpuText(event.target.value)}/>
                </div>
            </div>

            <div className="section description">
                <label htmlFor="description">Description:</label>
                <textarea name="description" id="description" onChange={(event) => setDescription(event.target.value)}></textarea>
            </div>

            <div className="cf section buttons">
                <button id="Add">Add</button>
                <button id="Update">Update</button>
                <button id="Delete">Delete</button>
                <button id="Reset">Reset</button>
            </div>
        </div>

    )
}

export default Component1;