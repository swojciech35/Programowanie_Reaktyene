import React, {useState} from 'react';

const Test2 = (props) => {

    const [value, setValue] = useState(4900);

    return (
        <div>
            <p>{value}</p>
            <p>{props.test}</p>
            <button className="btn btn-secondary btn-sm" onClick={() => setValue(49)}>Set Value</button>
        </div>
    )
};

export default Test2;