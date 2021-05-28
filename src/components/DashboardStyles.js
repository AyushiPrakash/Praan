import styled from "styled-components";

export const Layout = styled.main`
  margin: 2rem 4rem;

  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1rem;

    .logo {
      width: 100px;
      height: auto;
    }

    .timeSelect {
      width: 20%;
      min-width: 10em;
      margin-left: auto;
    }
  }

  .pmContainer {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
    grid-gap: 2rem;
    margin-bottom: 2rem;

    .card {
      background-color: ${(props) => props.theme.backgroundSecondary};
      padding: 1rem 1rem 1rem 0;
      border-radius: 0.5rem;
      position: relative;

      header {
        position: absolute;
        top: 1.25rem;
        left: 5rem;
        font-size: 16pt;
        color: ${(props) => props.theme.textPrimary};
      }
    }
    @media only screen and (max-width: 740px) {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

      .card {
        header {
          left: 2rem;
          font-size: 14pt;
        }
      }
    }
  }

  .timeSeriesContainer {
    background-color: ${(props) => props.theme.backgroundSecondary};
    padding: 1rem 1rem 1rem 0;
    border-radius: 0.5rem;
    position: relative;

    .timeSeriesSelect {
      width: 20%;
      min-width: 10em;
      margin-left: auto;
    }

    header {
      position: absolute;
      top: 1.25rem;
      left: 4rem;
      font-size: 16pt;
      color: ${(props) => props.theme.textPrimary};
    }

    @media only screen and (max-width: 740px) {
      header {
        left: 2rem;
        font-size: 14pt;
      }
    }
  }

  @media only screen and (max-width: 740px) {
    margin: 1rem;
  }
`;
