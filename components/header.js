import './header.css'

export const Header = ()=>{
    return(
       <div className='header'>
            <div>
                <span className='header-text'>Header : : โดจิน</span>
            </div>
            <div>
                <li className='header-link'>
                    <a className='subLink' href='#'>หน้าแรก</a>
                    <a className='subLink' href='#'>หมวดหมู่</a>
                    <a className='subLink' href='#'>ค้นหา</a>
                </li>
            </div>
       </div> 
    )
}