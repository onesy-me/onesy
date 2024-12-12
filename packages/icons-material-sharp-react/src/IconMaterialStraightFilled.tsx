import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStraightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StraightFilled'

      short_name='Straight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-120v-567l-64 63-56-56 160-160 160 160-56 56-64-63v567h-80Z"/>
    </Icon>
  );
});

IconMaterialStraightFilled.displayName = 'OnesyIconMaterialStraightFilled';

export default IconMaterialStraightFilled;
