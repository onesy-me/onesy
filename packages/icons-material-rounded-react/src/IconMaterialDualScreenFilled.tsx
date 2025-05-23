import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDualScreenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DualScreenFilled'

      short_name='DualScreen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M210-182q-23-9-36.5-29T160-256v-544q0-42 35-65.5t75-8.5l238 95q23 9 37.5 29.5T560-704v544q0 42-35 66t-75 8l-240-96Zm430-18v-504q0-67-54-108.5T467-880h253q33 0 56.5 23.5T800-800v520q0 33-23.5 56.5T720-200h-80Z"/>
    </Icon>
  );
});

IconMaterialDualScreenFilled.displayName = 'OnesyIconMaterialDualScreenFilled';

export default IconMaterialDualScreenFilled;
