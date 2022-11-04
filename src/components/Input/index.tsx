import { forwardRef, ForwardRefRenderFunction } from 'react';

import * as S from './styles';

const InputBase: ForwardRefRenderFunction<HTMLInputElement, any> = ({...rest}, ref) => {
  return (
    <S.Container {...rest} ref={ref} />
  );
}

export default oninput = forwardRef(InputBase)