import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTabs = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Tabs'

      short_name='Tabs'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-280H200v280Zm0-360h560v-200H200v200Zm480-80q17 0 28.5-11.5T720-680q0-17-11.5-28.5T680-720H520q-17 0-28.5 11.5T480-680q0 17 11.5 28.5T520-640h160Zm-480 80v-200 200Z"/>
    </Icon>
  );
});

IconMaterialTabs.displayName = 'OnesyIconMaterialTabs';

export default IconMaterialTabs;
