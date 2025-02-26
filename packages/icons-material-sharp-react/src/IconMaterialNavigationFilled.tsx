import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNavigationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NavigationFilled'

      short_name='Navigation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m200-120-40-40 320-720 320 720-40 40-280-120-280 120Z"/>
    </Icon>
  );
});

IconMaterialNavigationFilled.displayName = 'OnesyIconMaterialNavigationFilled';

export default IconMaterialNavigationFilled;
