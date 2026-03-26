import React from "react";
import './Section.css';

function Section({title, children, repeating_element=<hr />}){
    const items = React.Children.toArray(children);
    return (
        <div className="section">
            <h3>{title}</h3>
            <hr />
            {
            items.map((child, index) => (
                <React.Fragment key={child.key ?? index}>
                    {child}
                    {index < children.length - 1 && repeating_element}
                </React.Fragment>
                
            ))
            }
        </div>
    )
}

export default Section;