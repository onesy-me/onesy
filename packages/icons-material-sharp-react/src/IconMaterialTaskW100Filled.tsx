import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTaskW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TaskW100Filled'

      short_name='Task'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m438-299 190-190-20-20-170 170-86-86-20 20 106 106ZM212-132v-696h374l162 162v534H212Zm360-520h148L572-800v148Z"/>
    </Icon>
  );
});

IconMaterialTaskW100Filled.displayName = 'OnesyIconMaterialTaskW100Filled';

export default IconMaterialTaskW100Filled;
