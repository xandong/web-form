import styled from "styled-components";

export const Button = styled.button`
  margin-top: 16px;
  padding: 8px 24px;
  border: 2px solid #2294d2;
  border-radius: 8px;
  color: #2294d2;
  z-index: 1;
  background: #f5f5f5;
  position: relative;
  font-weight: 700;
  font-size: 18px;

  -webkit-transition: all 250ms;
  transition: all 250ms;
  overflow: hidden;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    background-color: #2294d2;
    border-radius: 4px;
    z-index: -1;
    -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
    box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
    -webkit-transition: all 250ms;
    transition: all 250ms;
  }

  :hover {
    color: #f5f5f5;
  }

  :hover::before {
    width: 100%;
  }
`;
