
const Cell = ({ cellKey, cellData }) => {
    return (
        <td>
            {cellKey} : {cellData}   
        </td>
    );
};

export default Cell;