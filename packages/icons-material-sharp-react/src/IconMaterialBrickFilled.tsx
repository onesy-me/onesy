import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrickFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrickFilled'

      short_name='Brick'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-480h120v-160h240v160h80v-160h240v160h120v480H80Z"/>
    </Icon>
  );
});

IconMaterialBrickFilled.displayName = 'OnesyIconMaterialBrickFilled';

export default IconMaterialBrickFilled;
