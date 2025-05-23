import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTextSelectMoveForwardCharacterFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextSelectMoveForwardCharacterFilled'

      short_name='TextSelectMoveForwardCharacter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-120v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80ZM120-120v-80h80v-560h-80v-80h240v80h-80v560h80v80H120Zm560-200-56-56 63-64H400v-80h287l-63-64 56-56 160 160-160 160Z"/>
    </Icon>
  );
});

IconMaterialTextSelectMoveForwardCharacterFilled.displayName = 'OnesyIconMaterialTextSelectMoveForwardCharacterFilled';

export default IconMaterialTextSelectMoveForwardCharacterFilled;
