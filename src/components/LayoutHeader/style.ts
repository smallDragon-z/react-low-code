import styled from '@emotion/styled';

const HeaderWrapper = styled.header`
  position: relative;
  display: flex;
  height: 4rem;
  padding: 0 3.333rem;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgb(0 0 0 / 8%) 0 0.083rem 0;
  z-index: 5;
  .logo {
  }
  .nav .nav-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav-item {
    font-size: 1.167rem;
    color: #333;
    cursor: pointer;
    &:nth-child(2) {
      margin: 0 3.333rem;
    }
  }
`;

export default HeaderWrapper;
