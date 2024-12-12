import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTrailLengthShortW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrailLengthShortW100'

      short_name='TrailLengthShort'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-306q-69 0-118-45.5T426-466H186v-28h240q3-35 22.5-71.5T505-626H266v-28h334q72.21 0 123.1 50.85 50.9 50.85 50.9 123T723.1-357q-50.89 51-123.1 51Zm0-28q60 0 103-43t43-103q0-60-43-103t-103-43q-60 0-103 43t-43 103q0 60 43 103t103 43Zm-294 28v-28h68v28h-68Zm294-174Z"/>
    </Icon>
  );
});

IconMaterialTrailLengthShortW100.displayName = 'OnesyIconMaterialTrailLengthShortW100';

export default IconMaterialTrailLengthShortW100;
