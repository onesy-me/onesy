import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPrintAddFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintAddFilled'

      short_name='PrintAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-120v-160H80v-360h800v150q-27-14-56.5-22t-60.5-8q-78 0-141.5 44T530-360H320v160h204q7 22 17 42t24 38H240Zm0-560v-160h480v160H240Zm480 560v-120H600v-80h120v-120h80v120h120v80H800v120h-80Z"/>
    </Icon>
  );
});

IconMaterialPrintAddFilled.displayName = 'OnesyIconMaterialPrintAddFilled';

export default IconMaterialPrintAddFilled;
