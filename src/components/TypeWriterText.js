import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect';
import Button from './Button';

const Title = styled.h2`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
width: 80%;
color: ${props => props.theme.text};
align-self: flex-start;

span{
  text-transform: uppercase;
  font-family: 'Akaya Telivigala', cursive;
}
.text-1 {
  color: blue;
}
.text-2 {
  color: orange;
}
.text-3 {
  color: red;
}
`
const SubTitle = styled.h3`
  font-size: ${props => props.theme.fontlg};
  text-transform: capitalize;
  color: ${props => `rgb(${props.theme.textRgba}, 0.6)`};
  font-weight: 600;
  margin-bottom: 1rem;
  width: 80%;
  align-self: flex-start;
`

const ButtonContainer = styled.div`
width: 80%;
  align-self: flex-start;
`
const TypeWriterText = () => {
  return (
    <>
    <Title>
      Welcome to the next Big
      <Typewriter options={{
        autoStart: true,
        loop: true,
      }}
  onInit={(typewriter) => {
    typewriter
    .typeString(`<span class="text-1">Thing.</span>`)
      .pauseFor(2000)
      .deleteAll()

      .typeString(`<span class="text-2">Collection.</span>`)
      .pauseFor(2000)
      .deleteAll()

      .typeString(`<span class="text-3">NFTs.</span>`)
      .pauseFor(2000)
      .deleteAll()

      .typeString(`<span class="text-1">Expression.</span>`)
      .pauseFor(2000)
      .deleteAll()

      .typeString(`<span class="text-2">Market.</span>`)
      .pauseFor(2000)
      .deleteAll()

      .typeString(`<span class="text-3">D͟e͟s͟t͟i͟n͟a͟t͟i͟o͟n͟.</span>`)
      .pauseFor(2000)
      .deleteAll()
      .start();
  }}
/>
    </Title>
    <SubTitle>Looking For What's Next?</SubTitle>
    <ButtonContainer>
      <Button text='Learn More' link='#about' />
    </ButtonContainer>
    </>
  );
};

export default TypeWriterText;