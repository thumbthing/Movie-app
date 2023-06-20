import styled from "styled-components";

const About = (props: any) => {
  console.log(props);

  return (
    <StyledAboutContainer className='about__container'>
      <StyledFirstSpan>
        "Feedom is the freedom to say that two plus two make four. If that is
        granted, all else follows."
      </StyledFirstSpan>
      <StyledSecondSpan>- George Orwell, 1984</StyledSecondSpan>
    </StyledAboutContainer>
  );
};

export default About;

const StyledAboutContainer = styled.div`
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  padding: 20px;
  border-radius: 5px;
  background-color: white;
  margin: 0 auto;
  margin-top: 100px;
  width: 100%;
  max-width: 400px;
  font-weight: 300;
`;

const StyledFirstSpan = styled.span`
  font-size: 20px;
`;

const StyledSecondSpan = styled.span`
  display: block;
  margin-top: 10px;
`;
