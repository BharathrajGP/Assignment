import React from 'react'
import { SubNav } from './';

const SubNavContainer = (props) => {
    const { ClassNames, handleNavSelect } = props;
    return (<>{ClassNames.map((Class, i) => <SubNav key={i} {...Class} i={i} handleNavSelect={handleNavSelect} />)} </>)
}

export { SubNavContainer }