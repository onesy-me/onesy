import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialForkRight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForkRight'

      short_name='ForkRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-120v-567l-64 63-56-56 160-160 160 160-56 57-64-64v261q35-31 79-44.5t88-13.5q11 0 21 1t19 3l-63-64 56-56 160 160-160 160-56-56 63-64q-11-2-22-3.5t-22-1.5q-54 0-99.5 30.5T440-280v160h-80Z"/>
    </Icon>
  );
});

IconMaterialForkRight.displayName = 'OnesyIconMaterialForkRight';

export default IconMaterialForkRight;
