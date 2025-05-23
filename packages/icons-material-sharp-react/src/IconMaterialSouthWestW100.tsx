import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSouthWestW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SouthWestW100'

      short_name='SouthWest'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M226-226v-348h28v300l490-490 20 20-490 490h300v28H226Z"/>
    </Icon>
  );
});

IconMaterialSouthWestW100.displayName = 'OnesyIconMaterialSouthWestW100';

export default IconMaterialSouthWestW100;
