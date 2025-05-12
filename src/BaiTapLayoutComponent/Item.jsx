import React from "react";

const Item = () => {
  return (
    <div className="d-flex mx-auto gap-4 mt-3 " style={{ width: "54rem" }}>
      <div className="card" style={{ width: "13rem", height: "25rem" }}>
        <img
          src="https://picsum.photos/200"
          className="top"
          style={{ height: "9rem" }}
          alt="..."
        />
        <div className="card-body text-center">
          <h5 className="card-title ">Card title</h5>
          <p className="mx-auto card-text pb-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            esse necessitatibus neque.
          </p>
          <div className="card-footer-custom pt-3 pb-2  ">
            <a href="#" className="btn btn-primary ">
              Find out more !
            </a>
          </div>
        </div>
      </div>

      <div className="card" style={{ width: "13rem", height: "25rem" }}>
        <img
          src="https://picsum.photos/200"
          className="top"
          style={{ height: "9rem" }}
          alt="..."
        />
        <div className="card-body text-center">
          <h5 className="card-title ">Card title</h5>
          <p className="mx-auto card-text pb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            maiores quis quia, quasi id quo.
          </p>
          <div className="card-footer-custom pt-3 pb-2   ">
            <a href="#" className="btn btn-primary ">
              Find out more !
            </a>
          </div>
        </div>
      </div>

      <div className="card" style={{ width: "13rem", height: "25rem" }}>
        <img
          src="https://picsum.photos/200"
          className="top"
          style={{ height: "9rem" }}
          alt="..."
        />
        <div className="card-body text-center">
          <h5 className="card-title ">Card title</h5>
          <p className="mx-auto card-text pb-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            esse necessitatibus neque.
          </p>
          <div className="card-footer-custom pt-3 pb-2   ">
            <a href="#" className="btn btn-primary ">
              Find out more !
            </a>
          </div>
        </div>
      </div>

      <div className="card" style={{ width: "13rem", height: "25rem" }}>
        <img
          src="https://picsum.photos/200"
          className="top"
          style={{ height: "9rem" }}
          alt="..."
        />
        <div className="card-body text-center">
          <h5 className="card-title ">Card title</h5>
          <p className="mx-auto card-text pb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            maiores quis quia, quasi id quo.
          </p>
          <div className="card-footer-custom pt-3 pb-2">
            <a href="#" className="btn btn-primary ">
              Find out more !
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
