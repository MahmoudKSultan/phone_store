import styled from "styled-components";

const ButtonContainer = styled.button`
  text-transform: capitalize;
font - size: 1.4rem;
background: transparent;
border: 2px solid var(--lightBlue);
border-color : ${(props) => (props.cart ? "orangered" : " var(--lightBlue)")};
color : ${(prop) => (prop.cart ? "orangered" : "black")};
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
outline-color: red;
cursor: pointer;
display: inline - block;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.3s ease-in-out;
font-weight : bold;
  
&:hover {
  background-color : ${(props) => (props.cart ? "orange" : "var(--lightBlue)")};
  color: white;
}
`;

export default ButtonContainer;
