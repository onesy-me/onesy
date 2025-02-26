import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMinimize = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Minimize'

      short_name='Minimize'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-120q-17 0-28.5-11.5T240-160q0-17 11.5-28.5T280-200h400q17 0 28.5 11.5T720-160q0 17-11.5 28.5T680-120H280Z"/>
    </Icon>
  );
});

IconMaterialMinimize.displayName = 'OnesyIconMaterialMinimize';

export default IconMaterialMinimize;
