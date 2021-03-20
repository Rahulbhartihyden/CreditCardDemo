import React, { useState } from "react";
import { Data } from "./Data";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import "./Accordion.css";

const Dropdown = styled.div`
  background: #fff;
  color: #000000;
  width: 100%;
  height: 100px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
`;
const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 50vh;
  background: #fff;
  top: 2200px;
  left: 500px;
  width: 100vh;
`;
const Container = styled.div`
  position: relative;
  top: 10%;
  width: 100vh;
  ${"" /* box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3); */}
`;
const Wrap = styled.div`
  background: #fff;
  color: #f2707c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vh;
  text-align: center;
  cursor: pointer;
  font-family: Helvetica Neue;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;

  h1 {
    padding: 2rem;
    font-size: 2rem;
  }
  span {
    margin-right: 1.5rem;
  }
`;

const Accordino = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };
  return (
    <IconContext.Provider value={{ color: "#F2707", size: "25px" }}>
      <AccordionSection>
        <Container>
          <h1 className="headingFAQ">FAQs</h1>
          {Data.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h1>{item.Question}</h1>
                  <span>
                    {clicked === index ? <FiChevronUp /> : <FiChevronDown />}
                  </span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.Answers}</p>
                  </Dropdown>
                ) : null}
                <hr/>
              </>
            );
          })}
        </Container>
      </AccordionSection>
      ;
    </IconContext.Provider>
  );
};

export default Accordino;
