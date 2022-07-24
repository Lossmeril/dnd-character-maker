import { Global } from '@emotion/react';

const Fonts = () => {
  return (
    <Global
      styles={`        
        @font-face {
            font-family: Indira K;
            src: url(/fonts/indira_k.ttf);
        }

        @font-face {
            font-family: "Crimson";
            src: url("/fonts/Crimson-Roman.otf");
            font-weight: normal;
            font-style: normal;
          }
          
        @font-face {
            font-family: "Crimson";
            src: url("/fonts/Crimson-Bold.otf");
            font-weight: bold;
            font-style: normal;
          }

        @font-face {
            font-family: "Crimson";
            src: url("/fonts/Crimson-Italic.otf");
            font-weight: normal;
            font-style: italic;
          }

        @font-face {
            font-family: "Crimson";
            src: url("/fonts/Crimson-BoldItalic.otf");
            font-weight: bold;
            font-style: italic;
          }
    `}
    />
  );
};

export default Fonts;
