// import 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { IoSearch } from 'react-icons/io5';
import { FiGlobe } from 'react-icons/fi';
import { BsList } from 'react-icons/bs';


import styles from './Header.module.scss';
import { Image } from '@/components/Image';
import images from '@/assets/images'
import { Button } from '@/components/Button';
import { useState } from 'react';
import Filter from '@/components/Filter/Filter';

const cx = classNames.bind(styles);

function Header() {

    const filterGroup = [
        {
            classes: 'filter-wrapper',
            items: [
                {
                    props: {
                        filter: 'filter',
                        first: 'first',
                        x_medium: 'x_medium', 
                        textButton: 'textButton',
                    },
                    context: ' Anywhere ',
                    divide: true,
                },
                {
                    props: {
                        filter: 'filter',
                        x_medium: 'x_medium', 
                        textButton: 'textButton',
                    },
                    context: ' Any week ',
                    divide: true
                },
                {
                    props: {
                        filter: 'filter',
                        x_medium: 'x_medium', 
                        textLink: 'textLink',
                    },
                    context: ' Add guests ',
                },
                {
                    props: {
                        iconBtn: 'iconBtn',
                    },
                    className: 'search-btn',
                    child: <IoSearch />
                }
            ],
        },
        {
            classes: 'active-filter-wrapper',
            items: [
                {
                    props: {
                        filter: 'filter',
                        x_small: 'x_small', 
                        textUnder: 'textUnder'
                    },
                    context: 'Stays'
                },
                {
                    props: {
                        filter: 'filter',
                        x_small: 'x_small', 
                        textUnder: 'textUnder'
                    },
                    context: 'Experiences'
                },
                {
                    props: {
                        filter: 'filter',
                        x_small: 'x_small', 
                        textUnder: 'textUnder',
                        to: '/guests'
                    },
                    context: 'Online Experiences',
                },
            ]
        }
    ];

    const [orderFilter, setOrderFilter] = useState(filterGroup[0]);

    const handleClick = () => {
        setOrderFilter(filterGroup[1]);
    }

    const handleBlur = () => {
        setOrderFilter(filterGroup[0]);
    }




    return (
        <div className={cx('wrapper')}>
            <div className={cx('logo-wrapper')}>
                <Link to={'/'}>
                    <img src={images.logo} alt='logo' className={cx('logo-page')}></img>
                </Link>
            </div>

            <div className={'filter-container'} onBlur={handleBlur} onClick={handleClick}>
                <Filter className={cx(orderFilter.classes)} data={orderFilter.items}>
                </Filter>
            </div>

            <div className={cx('actions-wrapper')}>
                <Button medium filter to='/hosts' textButton hoverable>
                    Airbnb your home
                </Button>
                <Button className={cx('icon-actions')} filter textButton hoverable iconBtn medium>
                    <FiGlobe />
                </Button>
                <div className={cx('actions-accounts')}>
                    <Button className={cx('avatar-wrapper')} filter medium>
                        <BsList />
                        <Image
                            className={cx('user-avatar')}
                            alt='Avatar'
                            src={images.avatar}
                        />
                    </Button>
                </div>
            </div>

        </div>
    );
}

export default Header;