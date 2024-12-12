import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEntFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EntFilled'

      short_name='Ent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-80v-172q-57-52-88.5-121.5T120-520q0-150 105-255t255-105q125 0 221.5 73.5T827-615l64 255H760v200H600v80H444l25-240h131v-80H477l9-80h194v-80H413L364-80H240Z"/>
    </Icon>
  );
});

IconMaterialEntFilled.displayName = 'OnesyIconMaterialEntFilled';

export default IconMaterialEntFilled;
