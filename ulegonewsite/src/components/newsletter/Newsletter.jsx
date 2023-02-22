import React from 'react'


const Newsletter = () => {
  return (
    <div className="newscontainer">
      <div className="Newsletter ml[46px] mr-40">
        <div className="h1">Subscribe to <br /> our Newsletter</div>
        <div className="email">
        <input type="text" name="" id="" placeholder="Enter your email Address" />
              <button>Subscribe</button>
        </div>
        </div>
     {/* <div className="newsLetter flex justify-around items-center my-28 ml-[46px] h-[300px] mr-40 ">
      <div className="news_txt font-semibold text-white text-[36px] leading-[54px]">Subscribe to our Newsletter</div>
      <div className="newsBox">
        <input type="text" placeholder='Enter your Email Address' id="" />
        <button>Subscribe</button>
      </div>
     </div> */}
    </div>
  )
}

export default Newsletter;