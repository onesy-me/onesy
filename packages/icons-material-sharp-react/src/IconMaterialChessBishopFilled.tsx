import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChessBishopFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChessBishopFilled'

      short_name='ChessBishop'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-80v-200q55-38 99.5-88T330-480h-90v-80h72l-72-120 240-240 240 240-72 120h72v80h-90q26 62 70.5 112t99.5 88v200H160Zm320-560q17 0 28.5-11.5T520-680q0-17-11.5-28.5T480-720q-17 0-28.5 11.5T440-680q0 17 11.5 28.5T480-640Z"/>
    </Icon>
  );
});

IconMaterialChessBishopFilled.displayName = 'OnesyIconMaterialChessBishopFilled';

export default IconMaterialChessBishopFilled;
