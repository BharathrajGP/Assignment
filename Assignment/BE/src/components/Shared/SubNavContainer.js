import React from 'react'
import SubNav from './SubNav';

const SubNavContainer = (props) => {
    const { ClassNames } = props;
    return (<>{ClassNames.map((Class, i) => <SubNav key={i} {...Class} i={i} />)} </>)
}

export default SubNavContainer