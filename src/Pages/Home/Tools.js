import React, { useEffect, useState } from 'react';
import Toolsdetails from './Toolsdetails';

const Tools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('parts.json')
            .then(res => res.json())
            .then(data => setTools(data));
    }, [])
    return (
        <div className='my-10'>
            <h4 className='text-xl text-secondary text-center my-12'>Available Parts </h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    tools.map(tool =><Toolsdetails
                        key={tool._id}
                        tool={tool}
                    
                    ></Toolsdetails> )
                }
            </div>
             
        </div>
    );
};

export default Tools;