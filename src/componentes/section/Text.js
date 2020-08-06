import React from "react";
import styled from "styled-components";
import Button from "../Button";

const Styledsection = styled.section`
  font-family: Arial, Helvetica, sans-serif;
  color: 060a24;
  padding: 15px 70px;
  width: 100vw;
}

  @media (max-width: 768px) {
    margin: 0px;
    width: 100vw;
    padding: 15px 30px;
  }
  h1{ 
      font-size:36px; 
      padding-right: 100px;

  }
  
   }

`;

const StyledText = styled.h1`
  font-size: 64px;
  margin: 0px;
}
.subraya {
    text-decoration-line: line-through;
  }
  .punto {
    color: #0000ec;
  }
`;

const StyledParagraph = styled.div`
  
}
p{  width: 100vw;
    justify-items: center;
}


@media (max-width: 768px) {
    width: 100vw;
}
p{   font-size:14px;
    text-aling: justify;
    width: 90vw;
}
}
`;

const Text = () => {
  return (
    <Styledsection>
      <div>
        <StyledText>
          Hello <span className="subraya">world </span> pale blue dot
          <span className="punto">.</span>
        </StyledText>
      </div>
      <StyledParagraph>
        <p>
          El portal de podcasts que explora el mundo de la programación y la
          tecnología. Nuevos episodios, todos los jueves cada 15 días.
        </p>
        <Button text="CONOCÉ MÁS"/>
      </StyledParagraph>
    </Styledsection>
  );
};

export default Text;
