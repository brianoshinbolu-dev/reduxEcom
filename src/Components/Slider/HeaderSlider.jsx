import { Button, Carousel } from "react-bootstrap";
import React, { Fragment } from "react";

const HeaderSlider = () => {
  return (
    <Fragment>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../img/slider/pure-pu-ladies-shoulder-bag.png"
            style={{ height: "100vh", objectFit: "cover" }}
            alt="pure pu ladies bag"
          />
          <Carousel.Caption className="bg-white">
            <h5>Summer Collection Pure PU Ladies Shoulder Bag</h5>
            <p>Nulla vita elit libero, a pharetra augue mollis interdum.</p>
            <div className="mb-3">
              <Button variant="dark">Shop Now</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../img/slider/young-handsome-guy-smart-suit.png"
            style={{ height: "100vh", objectFit: "cover" }}
            alt="pure pu ladies bag"
          />
          <Carousel.Caption className="bg-white">
            <h5>Summer Collection Pure PU Ladies Shoulder Bag</h5>
            <p>Nulla vita elit libero, a pharetra augue mollis interdum.</p>
            <div className="mb-3">
              <Button variant="dark">Shop Now</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../img/slider/blender-fruits-kitchen-space.png"
            style={{ height: "100vh", objectFit: "cover" }}
            alt="pure pu ladies bag"
          />
          <Carousel.Caption className="bg-white">
            <h5>Summer Collection Pure PU Ladies Shoulder Bag</h5>
            <p>Nulla vita elit libero, a pharetra augue mollis interdum.</p>
            <div className="mb-3">
              <Button variant="dark">Shop Now</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Fragment>
  );
};

export default HeaderSlider;
