import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNorthEastW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NorthEastW100Filled'

      short_name='NorthEast'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m232-212-20-20 448-448H360v-28h348v348h-28v-300L232-212Z"/>
    </Icon>
  );
});

IconMaterialNorthEastW100Filled.displayName = 'OnesyIconMaterialNorthEastW100Filled';

export default IconMaterialNorthEastW100Filled;
