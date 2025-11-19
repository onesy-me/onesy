import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAdd2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Add2Filled'

      short_name='Add2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-120q-17 0-28.5-11.5T440-160v-280H160q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h280v-280q0-17 11.5-28.5T480-840q17 0 28.5 11.5T520-800v280h280q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440H520v280q0 17-11.5 28.5T480-120Z"/>
    </Icon>
  );
});

IconMaterialAdd2Filled.displayName = 'OnesyIconMaterialAdd2Filled';

export default IconMaterialAdd2Filled;
