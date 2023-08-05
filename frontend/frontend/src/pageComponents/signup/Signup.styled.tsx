import styled, {css} from 'styled-components'

const SignUpPage = styled.div.attrs<any>((props) => ({}))`
  height: 100%;
  padding-top: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  /* background-image: url("/BGimg.png"); */
  background-size: cover; 
  background-repeat: no-repeat; 
  background-position: center center; 
  background-color: #F9FAFB;

  /* @media (max-width: 1280px) {
    background-size: cover ;
  }
  @media (max-height: 700px) {
    background-size: cover ;
  } */
`

const SignupText = styled.div.attrs<any>((props) => ({}))`
  margin: 30px;
  font-size: 60px;
  font-family: ${(props) => props.theme.fonts.EnglishFontBold};
  color : ${(props) => props.theme.colors.purple}
`

const InputBox = styled.div.attrs<any>((props) => ({}))`
    ${(props) => {
        return css`
            width: 410px;
            height: 40px;
            margin: 10px;
        `
    }}
`

const SignUpContainer = styled.form.attrs<any>((props) => ({}))`
  width: 430px;
  height: auto;
  border-radius: 5px;
  padding: 10px 0px;
  flex-grow: 1;
`

const SignUpText = styled.div.attrs<any>((props) => ({}))`
  display: flex;
  margin-left: 10px;
  width: 100px;
  height: 100%;
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.HangeulFontRegular}
   
`

const SignUpItem = styled.div.attrs<any>((props) => ({}))`
  display: flex;
  flex-direction: column;
`

const PasswordCondition = styled.div.attrs<any>((props) => ({}))`
  margin-left: 10px;  
  margin-bottom: 10px;
  font-size: ${(props) => props.theme.fontSizes.xsmall};
  color: red
`

const InputRadioBox = styled.div.attrs<any>((props) => ({}))`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 410px;
    height: 40px;
    margin: 10px;

`

export { SignUpPage, SignupText, SignUpContainer, InputRadioBox, SignUpText, SignUpItem, InputBox, PasswordCondition }