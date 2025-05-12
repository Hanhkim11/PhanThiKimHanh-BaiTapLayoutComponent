import React from "react";

const Banner = () => {
  return (
    <div className="card d-flex mx-auto mt-3  ps-7 " style={{ width: "54rem" }}>
      <div className="py-5 px-4 bg-secondary">
        <h5 className=" fs-1 thin-text ">A Warm Welcome !</h5>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          veniam obcaecati ipsam pariatur laboriosam? Ratione ducimus dolore
          quas at est similique officia consequuntur ea fugiat debitis nostrum
          cum.
        </p>
        <a href="#" className="btn btn-primary">
          Call to action !
        </a>
      </div>
    </div>
  );
};

export default Banner;
