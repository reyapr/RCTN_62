import styled from 'styled-components'

export const Title = styled.h1(props => ({
  color: 'palevioletred',
  'text-align': 'center',
  'font-size': props.fontSize,
  'visibility': props.show ? 'unset' : 'hidden'
}))

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;