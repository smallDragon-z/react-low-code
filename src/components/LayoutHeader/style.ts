import styled from '@emotion/styled';

const HeaderWrapper = styled.header`
  .logo {
    position: relative;
    z-index: 5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 48px;
    box-shadow: rgb(0 0 0 / 8%) 0 1px 0;
  }
  .nav .nav-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav-item {
    font-size: 14px;
    color: #333;
    cursor: pointer;
  }
`;

export default HeaderWrapper;
