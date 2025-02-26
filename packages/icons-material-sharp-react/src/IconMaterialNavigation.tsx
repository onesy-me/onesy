import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNavigation = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Navigation'

      short_name='Navigation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m200-120-40-40 320-720 320 720-40 40-280-120-280 120Zm84-124 196-84 196 84-196-440-196 440Zm196-84Z"/>
    </Icon>
  );
});

IconMaterialNavigation.displayName = 'OnesyIconMaterialNavigation';

export default IconMaterialNavigation;
