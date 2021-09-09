import React from 'react';

export default function If( {conditional, children} )
{
    let arrayChildren = null;

    if ( typeof children == Array ) {
        arrayChildren = children;
    } else {
        arrayChildren = React.Children.toArray( children );
    }

    const elseChild = arrayChildren.filter( child => {
        return child.type && child.type.name === "Else";
    })[0];

    const ifChildren = arrayChildren.filter( child => {
        return child !== elseChild;
    });

    if ( conditional ) { return ifChildren; }
    else if ( elseChild ) { return elseChild; }
    else { return false; }
}

export function Else({children})
{
    return children;
}