import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMinimizeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MinimizeW100'

      short_name='Minimize'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M266-172v-28h428v28H266Z"/>
    </Icon>
  );
});

IconMaterialMinimizeW100.displayName = 'OnesyIconMaterialMinimizeW100';

export default IconMaterialMinimizeW100;
