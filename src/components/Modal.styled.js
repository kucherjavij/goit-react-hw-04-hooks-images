import styled from '@emotion/styled'

export const Overlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background-color: rgba(0, 0, 0, 0.9);
`;

export const Content = styled.img`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
max-height: 400px;
max-width: 600px;
width: 100%;
border-radius: 3px;
background-color: #fff
`;
