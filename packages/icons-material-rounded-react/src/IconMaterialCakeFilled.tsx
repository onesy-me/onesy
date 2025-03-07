import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCakeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CakeFilled'

      short_name='Cake'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-80q-17 0-28.5-11.5T120-120v-160q0-33 23.5-56.5T200-360h560q33 0 56.5 23.5T840-280v160q0 17-11.5 28.5T800-80H160Zm40-360v-120q0-33 23.5-56.5T280-640h160v-58q-18-12-29-29t-11-41q0-15 6-29.5t18-26.5l42-42q2-2 14-6 2 0 14 6l42 42q12 12 18 26.5t6 29.5q0 24-11 41t-29 29v58h160q33 0 56.5 23.5T760-560v120H200Z"/>
    </Icon>
  );
});

IconMaterialCakeFilled.displayName = 'OnesyIconMaterialCakeFilled';

export default IconMaterialCakeFilled;
