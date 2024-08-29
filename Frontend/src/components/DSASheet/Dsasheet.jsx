import React, { useEffect, useState } from 'react'

const Dsasheet = () => {
    const [sheet, setSheet] = useState({
        arrays: 0,
        binarysearch: 0,
        trees: 0,
        dp: 0,
        graph: 0,
    });

    useEffect(() => {
        console.log(sheet);
    }, [sheet]);

    const toggleValue = (key) => {
        setSheet(prevSheet => ({
            ...prevSheet,
            [key]: prevSheet[key] === 0 ? 1 : 0,
        }));
    };

    return (
        <div className='px-16'>
            <h1 className='text-center bg-blue-600 text-2xl text-white py-2 rounded-2xl'>Master DSA</h1>
            <div>
                <h2 
                    className='text-center py-1 cursor-pointer' 
                    onClick={() => toggleValue('arrays')}
                >
                    Arrays: 
                </h2>
                {sheet.arrays==1 && <h1>Array ke questions</h1>}
                <h2 
                    className='text-center py-1 cursor-pointer' 
                    onClick={() => toggleValue('binarysearch')}
                >
                    Binary Search: {sheet.binarysearch}
                </h2>

                <h3 
                    className='text-center py-1 cursor-pointer' 
                    onClick={() => toggleValue('trees')}
                >
                    Trees: {sheet.trees}
                </h3>

                <h4 
                    className='text-center py-1 cursor-pointer' 
                    onClick={() => toggleValue('dp')}
                >
                    Dynamic Programming: {sheet.dp}
                </h4>

                <h5 
                    className='text-center py-1 cursor-pointer' 
                    onClick={() => toggleValue('graph')}
                >
                    Graph: {sheet.graph}
                </h5>
            </div>
        </div>
    );
}

export default Dsasheet;
