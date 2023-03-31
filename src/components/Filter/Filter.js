import { Button } from '@/components/Button';
import classNames from 'classnames/bind';
import styles from './Filter.module.scss';
import { Fragment } from 'react';

const cx = classNames.bind(styles);

function Filter({children, className, data}) {


    return ( 
        <div className={className}>
            {data.map((item,index) => {

                const props = item.props;

                return (
                    <Fragment key={index}>
                        <Button
                            key = {index}
                            className = {cx(item.className)}
                            {...props}
                        >
                            {!item.props.iconBtn && <div className={cx('btn-wrapper')}>
                                {item.context}
                            </div >}
                                {item.child}
                        </Button>
                        {item.divide && <span className={cx('divide')}></span>}
                    </Fragment>
                )
            })}
            {children}
        </div>
     );
}

export default Filter;