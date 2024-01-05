import React, { useState, } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sidebar.css';

export default function sidebar () {
    const [selected, setSelected] = useState(0);

    const handleClick = (index) => {
        setSelected(index);
    }

    const links = ['/tasks', '/notifications', '/part-number-lookup', '/inventory', '/something-else']
    return (
        <div className="container">
            <div className="one">
                <ul>
                    {['Tasks', 'Notifications', 'Part Number Lookup', 'Inventory', 'Something Else'].map((item, index) => (
                        <li key={index} onClick={() => handleClick(index)} style={{backgroundColor: selected === index ? 'green' : 'black'}}>
                            <Link to={links[index]} style={{ color: 'inherit', textDecoration: 'none'}}>{item}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        
    );
}