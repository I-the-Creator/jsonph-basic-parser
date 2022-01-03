import Cell from "./Cell";

const getNestedObjValues = (dataObj, arr = []) => {
    Object.keys(dataObj).forEach(key => {
        // console.log(key);
        if(typeof dataObj[key] !== 'object') {
            return arr.push([key, dataObj[key]]);
        }
        getNestedObjValues(dataObj[key], arr);
    });
    return arr;
}

const Row = ({ item }) => {  // iterate through received object
    console.log(item);

    // array of object values with all nested object values as well
    // console.log(getNestedObjValues(item));

    return (
        <tr>
            {getNestedObjValues(item).map(([key, value]) => { 

            /* convert object 'key: value' pairs to array of [key, value] arrays and map 
                through it - destructuring 'key' and 'value'  w/o nested object iteration */
            // {Object.entries(item).map(([key, value]) => {  

                // console.log(Object.entries(item));
                // console.log(key);
                // console.log(JSON.stringify(value));
                return (
                    <Cell 
                        key={key} // it's not a prop, it's required param for table/list
                        cellKey={key}  // to pass the 'key' value to Cell component

                         // stringify 'value' as some 'value' can have nested object inside
                        // cellData={key === 'address' ? JSON.stringify(value.street) : JSON.stringify(value)} 
                        cellData={JSON.stringify(value)}
                        // cellData={JSON.stringify(value)}
                    />
                )
            })}
        </tr>
    )
}

export default Row;