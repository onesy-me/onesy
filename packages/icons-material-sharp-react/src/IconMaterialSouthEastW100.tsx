import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSouthEastW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SouthEastW100'

      short_name='SouthEast'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-252v-28h300L212-728l20-20 448 448v-300h28v348H360Z"/>
    </Icon>
  );
});

IconMaterialSouthEastW100.displayName = 'OnesyIconMaterialSouthEastW100';

export default IconMaterialSouthEastW100;
