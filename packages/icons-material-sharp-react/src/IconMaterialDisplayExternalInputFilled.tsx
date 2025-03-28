import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDisplayExternalInputFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DisplayExternalInputFilled'

      short_name='DisplayExternalInput'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m720-80-57-57 64-63H560v-80h167l-63-64 56-56 160 160L720-80Zm-600-40v-240h80v160h160v80H120Zm0-480v-240h240v80H200v160h-80Zm640 0v-160H600v-80h240v240h-80Z"/>
    </Icon>
  );
});

IconMaterialDisplayExternalInputFilled.displayName = 'OnesyIconMaterialDisplayExternalInputFilled';

export default IconMaterialDisplayExternalInputFilled;
