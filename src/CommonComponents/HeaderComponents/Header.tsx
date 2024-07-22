import * as React from 'react';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './headerCss.css';
const Header = (props: any) => {
    return (
        <div className="container">
            <div className="firstRow">
                <div className="container-fluid-firstRow">
                    <div className="firstRowMenuLeft">
                        <select>
                            <option>USA</option>
                            <option>IND</option>
                            <option>CAN</option>
                            <option>SPN</option>
                        </select>
                    </div>
                    <div className="firstRowMenuRight">
                        <ul className='firstRowMenuUL '>
                            <li className='firstRowMenu-li'>My Account</li>
                            <li className='firstRowMenu-li'>Whish List</li>
                            <li className='firstRowMenu-li'>Shopping</li>
                            <li className='firstRowMenu-li'>Cart</li>
                            <li className='firstRowMenu-li'>Checkout</li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className="secondRow">
                <div className="container-fluid-secondRow">

                    <div className="secondRow-logo">
                        Estore.
                    </div>
                    <div className='secondRow-menu-center'>
                        <ul className='secondRowMenuUL'>
                            <li className='secondRowMenu-li '>Home</li>
                            <li className='secondRowMenu-li '>Categories</li>
                            <li className='secondRowMenu-li '>Latest</li>
                            <li className='secondRowMenu-li '>Blog</li>
                            <li className='secondRowMenu-li '>Pages</li>
                            <li className='secondRowMenu-li '>Contact</li>
                        </ul>
                    </div>
                    <div className='secondRow-menu-right'>
                        <ul className='secondRowRightMenuUL'>                           
                            <input className='secondRow-menu-searchBox'placeholder='Search products'/>
                            <li className='secondRowRightMenu-li heartICon'><FavoriteBorderOutlinedIcon fontSize={'medium'}/></li>
                            <li className='secondRowRightMenu-li'><ShoppingCartIcon fontSize={'medium'}/></li>
                            <button className='btn secondRow-menu-signIn'>Sign In</button>
                        </ul>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default Header