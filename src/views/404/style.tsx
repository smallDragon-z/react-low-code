import styled from '@emotion/styled';

export default styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #416475;

  .error-container {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 15rem;
    font-family: 'Catamaran', sans-serif;
    font-weight: 800;
  }

  .error-container > span {
    display: inline-block;
    position: relative;
    line-height: 0.7;
    vertical-align: middle;
    color: #ffb485;
  }

  .error-container > span:nth-of-type(1) {
    color: #d1f2a5;
    animation: colordancing 4s infinite;
  }

  .error-container > span:nth-of-type(3) {
    color: #f56991;
    animation: colordancing2 4s infinite;
  }

  .error-container > span:nth-of-type(2) {
    width: 10rem;
    height: 10rem;
    margin: 0 0.8rem;
    border-radius: 83.25rem;
  }

  .error-container > span:nth-of-type(2):before,
  .error-container > span:nth-of-type(2):after {
    border-radius: 0;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: inherit;
    height: inherit;
    border-radius: 83.25rem;
    box-shadow:
      inset 2.5rem 0 0 rgba(209, 242, 165, 0.4),
      inset 0 2.5rem 0 rgba(239, 250, 180, 0.4),
      inset -2.5rem 0 0 rgba(255, 196, 140, 0.4),
      inset 0 -2.5rem 0 rgba(245, 105, 145, 0.4);
    animation: shadowsdancing 4s infinite;
  }

  .error-container > span:nth-of-type(2):before {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .screen-reader-text {
    position: absolute;
    top: -9999em;
    left: -9999em;
  }

  .link-container {
    text-align: center;
  }

  div.more-link {
    font-size: 1.083rem;
    background-color: #92a4ad;
    padding: 0.833rem 1.25rem;
    border-radius: 0;
    display: inline-block;
    margin-right: 0.417rem;
    margin-bottom: 0.417rem;
    line-height: 1.5;
    text-decoration: none;
    margin-top: 4.167rem;
    letter-spacing: 0.083rem;
    > a {
      color: #416475;
      text-transform: uppercase;
      text-decoration: none;
    }
  }
  @keyframes shadowsdancing {
    0% {
      box-shadow:
        inset 2.5rem 0 0 rgba(209, 242, 165, 0.4),
        inset 0 2.5rem 0 rgba(239, 250, 180, 0.4),
        inset -2.5rem 0 0 rgba(255, 196, 140, 0.4),
        inset 0 -2.5rem 0 rgba(245, 105, 145, 0.4);
    }
    25% {
      box-shadow:
        inset 2.5rem 0 0 rgba(245, 105, 145, 0.4),
        inset 0 2.5rem 0 rgba(209, 242, 165, 0.4),
        inset -2.5rem 0 0 rgba(239, 250, 180, 0.4),
        inset 0 -2.5rem 0 rgba(255, 196, 140, 0.4);
    }
    50% {
      box-shadow:
        inset 2.5rem 0 0 rgba(255, 196, 140, 0.4),
        inset 0 2.5rem 0 rgba(245, 105, 145, 0.4),
        inset -2.5rem 0 0 rgba(209, 242, 165, 0.4),
        inset 0 -2.5rem 0 rgba(239, 250, 180, 0.4);
    }
    75% {
      box-shadow:
        inset 2.5rem 0 0 rgba(239, 250, 180, 0.4),
        inset 0 2.5rem 0 rgba(255, 196, 140, 0.4),
        inset -2.5rem 0 0 rgba(245, 105, 145, 0.4),
        inset 0 -2.5rem 0 rgba(209, 242, 165, 0.4);
    }
    100% {
      box-shadow:
        inset 2.5rem 0 0 rgba(209, 242, 165, 0.4),
        inset 0 2.5rem 0 rgba(239, 250, 180, 0.4),
        inset -2.5rem 0 0 rgba(255, 196, 140, 0.4),
        inset 0 -2.5rem 0 rgba(245, 105, 145, 0.4);
    }
  }
  @keyframes colordancing {
    0% {
      color: #d1f2a5;
    }
    25% {
      color: #f56991;
    }
    50% {
      color: #ffc48c;
    }
    75% {
      color: #effab4;
    }
    100% {
      color: #d1f2a5;
    }
  }
  @keyframes colordancing2 {
    0% {
      color: #ffc48c;
    }
    25% {
      color: #effab4;
    }
    50% {
      color: #d1f2a5;
    }
    75% {
      color: #f56991;
    }
    100% {
      color: #ffc48c;
    }
  }
`;
