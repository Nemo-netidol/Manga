import "./container.css";

export const Container = () => {
  return (
    <div>
        <div className='container'>
          <h2 className='thehead'>อ่านโดจิน</h2>
          <div className='content'>
              <div className='box'>1</div>
              <div className='box'>2</div>
              <div className='box'>3</div>
              <div className='box'>4</div>
              <div className='box'>5</div>
              <div className='box'>6</div>
          </div>
          <div className='sidebar'>
            <div>
                <div className='sidebar-1'> Hello</div>
            </div>
          </div>
        </div>
      {/* <div className="container-head">
        <p>อ่านโดจิน</p>
        <p>อ่านโดจิน</p>
      </div>

      <div className="doujin-container">
        <div className="leftside">
            Hello
        </div>
        <div className="rightside">
            <div className='category-box'>
                <div>
                    Head
                </div>
                <div className='category-head'>
                    Category
                </div>
                    
            </div>
        </div>
      </div> */}
    </div>
  );
};
