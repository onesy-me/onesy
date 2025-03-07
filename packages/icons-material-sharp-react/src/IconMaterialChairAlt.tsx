import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChairAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChairAlt'

      short_name='ChairAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120v-360h120v-80H200v-280h560v280H640v80h120v360h-80v-120H280v120h-80Zm80-520h400v-120H280v120Zm120 160h160v-80H400v80ZM280-320h400v-80H280v80Zm0-320v-120 120Zm0 320v-80 80Z"/>
    </Icon>
  );
});

IconMaterialChairAlt.displayName = 'OnesyIconMaterialChairAlt';

export default IconMaterialChairAlt;
