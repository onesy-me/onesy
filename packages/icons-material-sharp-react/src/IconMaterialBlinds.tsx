import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBlinds = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Blinds'

      short_name='Blinds'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-120v-80h80v-640h640v640h80v80H80Zm160-560h320v-80H240v80Zm0 160h320v-80H240v80Zm0 320h480v-240h-80v73q14 10 22 25t8 32q0 29-20.5 49.5T600-240q-29 0-49.5-20.5T530-310q0-17 8-32t22-25v-73H240v240Zm400-480h80v-80h-80v80Zm0 160h80v-80h-80v80Z"/>
    </Icon>
  );
});

IconMaterialBlinds.displayName = 'OnesyIconMaterialBlinds';

export default IconMaterialBlinds;
