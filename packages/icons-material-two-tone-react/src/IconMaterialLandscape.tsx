import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLandscape = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Landscape'

      short_name='Landscape'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M5 16h3.04l-1.52-2.03z" opacity=".3"/><path d="M9.78 11.63l1.25 1.67L14 9.33 19 16h-8.46l-4.01-5.37L1 18h22L14 6l-4.22 5.63zM5 16l1.52-2.03L8.04 16H5z"/>
    </Icon>
  );
});

IconMaterialLandscape.displayName = 'OnesyIconMaterialLandscape';

export default IconMaterialLandscape;
