import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialModelingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModelingFilled'

      short_name='Modeling'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-140 560-300l160-160 56 56-63 64h167v80H713l63 64-56 56ZM80-160v-280h400v280H80Zm160-340-56-56 63-64H80v-80h167l-63-64 56-56 160 160-160 160Zm240-20v-280h400v280H480Z"/>
    </Icon>
  );
});

IconMaterialModelingFilled.displayName = 'OnesyIconMaterialModelingFilled';

export default IconMaterialModelingFilled;
