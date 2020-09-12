import styled from 'styled-components'

export const Styles = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.offBlack};
  color: ${(props) => props.theme.offWhite};

  display: flex;
  justify-content: center;
  align-items: center;
`
