import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBorderOuter = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderOuter'

      short_name='BorderOuter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 11h2v2h-2zm0-4h2v2h-2zm10-4H3v18h18V3zm-2 16H5V5h14v14zm-4-8h2v2h-2zm-8 0h2v2H7zm4 4h2v2h-2z"/>
    </Icon>
  );
});

IconMaterialBorderOuter.displayName = 'OnesyIconMaterialBorderOuter';

export default IconMaterialBorderOuter;
