import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSquareFootFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SquareFootFilled'

      short_name='SquareFoot'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-742l164 164-54 54 28 28 54-54 104 104-54 54 28 28 54-54 104 104-54 54 28 28 54-54 104 104-54 54 28 28 54-54 154 154H120Zm120-120h332L240-572v332Z"/>
    </Icon>
  );
});

IconMaterialSquareFootFilled.displayName = 'OnesyIconMaterialSquareFootFilled';

export default IconMaterialSquareFootFilled;
