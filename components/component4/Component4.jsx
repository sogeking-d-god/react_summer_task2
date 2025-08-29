import Component3 from "../component3/Component3";

const Component4 = ({selectMultipleArr, categoryOptionsArr = [], brandOptionsArr = []}) => {
    

    return (
        <div className="component-4" >
            <div className="multiple-select-wrapper">
                <label htmlFor="multiple_select">Items:</label>

                <select name="multiple_select" multiple>
                    {
                        selectMultipleArr.map((opt, index) => (
                            <option key={index} value={opt}> {opt}</option>
                        ))
                    }
                </select>
            </div>

            <div className="row">
                <div className="input_wrapper">
                    <label htmlFor="code">Code:</label>
                    <input type="text" name="code"/>
                </div>

                <div className="component3_wrapper">

                    <div className="component3_header">
                        <label htmlFor="category">Category:</label>
                        <div className="counter" >{categoryOptionsArr.length}</div>
                    </div>

                    <Component3 name="category" optionsArr={categoryOptionsArr}/>
                </div>
            </div>

            <div className="row">
                <div className="input_wrapper">
                    <label htmlFor="item">Item:</label>
                    <input type="text" name="item"/>
                </div>

                <div className="component3_wrapper">

                    <div className="component3_header">
                        <label htmlFor="brand">Brand:</label>
                        <div className="counter" >{brandOptionsArr.length}</div>
                    </div>

                    <Component3 name="brand" optionsArr={brandOptionsArr}/>
                </div>
            </div>
            
            <div className="row">
                <div className="input_wrapper">
                    <label htmlFor="price">Price:</label>
                    <input type="text" name="price"/>
                </div>

                <div className="input_wrapper">
                    <label htmlFor="description">Description:</label>
                    <textarea rows="3" name="description"/>
                </div>
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

export default Component4;