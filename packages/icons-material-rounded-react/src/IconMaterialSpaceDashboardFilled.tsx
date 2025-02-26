import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpaceDashboardFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpaceDashboardFilled'

      short_name='SpaceDashboard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h160q33 0 56.5 23.5T440-760v560q0 33-23.5 56.5T360-120H200Zm400 0q-33 0-56.5-23.5T520-200v-200q0-33 23.5-56.5T600-480h160q33 0 56.5 23.5T840-400v200q0 33-23.5 56.5T760-120H600Zm0-440q-33 0-56.5-23.5T520-640v-120q0-33 23.5-56.5T600-840h160q33 0 56.5 23.5T840-760v120q0 33-23.5 56.5T760-560H600Z"/>
    </Icon>
  );
});

IconMaterialSpaceDashboardFilled.displayName = 'OnesyIconMaterialSpaceDashboardFilled';

export default IconMaterialSpaceDashboardFilled;
