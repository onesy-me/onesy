import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTimer2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Timer2W100Filled'

      short_name='Timer2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M346-246v-248h280v-192H346v-28h308v248H374v192h280v28H346Z"/>
    </Icon>
  );
});

IconMaterialTimer2W100Filled.displayName = 'OnesyIconMaterialTimer2W100Filled';

export default IconMaterialTimer2W100Filled;
