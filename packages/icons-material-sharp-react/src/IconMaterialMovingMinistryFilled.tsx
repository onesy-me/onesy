import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMovingMinistryFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovingMinistryFilled'

      short_name='MovingMinistry'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-120v-720h560v720H400v-200H240v200H40Zm160-320h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm420 260-56-56 43-44H640v-80h127l-43-44 56-56 140 140-140 140Z"/>
    </Icon>
  );
});

IconMaterialMovingMinistryFilled.displayName = 'OnesyIconMaterialMovingMinistryFilled';

export default IconMaterialMovingMinistryFilled;
