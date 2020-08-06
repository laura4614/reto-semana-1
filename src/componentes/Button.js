import React from 'react'
import styled from "styled-components";

const StyledButton = styled.button`
width:288px;
height:48px;
background-color: #00F3BB;
border:none;
`

const Button = ({text}) => <StyledButton>{text}</StyledButton>

export default Button;