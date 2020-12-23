import React from 'react';
import st from './Wrap.module.css'
import classNames from 'classnames'


const Wrap = ({children, className}) => {
    return (
        <div className={st.wrap}> 
            <div className={classNames(st.wrap_children, className)}>
                {children}
            </div>
        </div>
    )
};

export default Wrap;