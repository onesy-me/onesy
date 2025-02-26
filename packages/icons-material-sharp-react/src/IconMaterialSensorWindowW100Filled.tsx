import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSensorWindowW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SensorWindowW100Filled'

      short_name='SensorWindow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-133v-694h536v694H212Zm56-368h158v-28h108v28h158v-274H268v274Zm0 28v288h424v-288H268Zm-28-326v638h480v-638H240Z"/>
    </Icon>
  );
});

IconMaterialSensorWindowW100Filled.displayName = 'OnesyIconMaterialSensorWindowW100Filled';

export default IconMaterialSensorWindowW100Filled;
