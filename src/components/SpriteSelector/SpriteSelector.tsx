import { FemaleSymbol } from "@styled-icons/foundation/FemaleSymbol";
import { MaleSymbol } from "@styled-icons/foundation/MaleSymbol";
import * as Styled from './styles';

export const SpriteSelector = () => (
  <Styled.Container>
    <Styled.SubContainer>
      <Styled.Button>
        <MaleSymbol />
      </Styled.Button>
      <Styled.Button>
        <FemaleSymbol />
      </Styled.Button>
    </Styled.SubContainer>
    <Styled.Divider />
    <Styled.SubContainer>
      <Styled.Button>
        <MaleSymbol />
      </Styled.Button>
      <Styled.Button>
        <FemaleSymbol />
      </Styled.Button>
    </Styled.SubContainer>
  </Styled.Container>
);
