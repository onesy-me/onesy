import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNatureFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NatureFilled'

      short_name='Nature'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-80v-80h240v-160h-80q-83 0-141.5-58.5T160-520q0-60 33-110.5t89-73.5q9-75 65.5-125.5T480-880q76 0 132.5 50.5T678-704q56 23 89 73.5T800-520q0 83-58.5 141.5T600-320h-80v160h240v80H200Z"/>
    </Icon>
  );
});

IconMaterialNatureFilled.displayName = 'OnesyIconMaterialNatureFilled';

export default IconMaterialNatureFilled;
