import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStraight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Straight'

      short_name='Straight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-120v-567l-64 63-56-56 160-160 160 160-56 56-64-63v567h-80Z"/>
    </Icon>
  );
});

IconMaterialStraight.displayName = 'OnesyIconMaterialStraight';

export default IconMaterialStraight;
