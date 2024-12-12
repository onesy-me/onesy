import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMicExternalOnFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicExternalOnFilled'

      short_name='MicExternalOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-680q-15-17-23.5-37t-8.5-43q0-50 35-85t85-35q50 0 85 35t35 85q0 23-8.5 43T368-680H192Zm48 600v-160h-40l-40-400h240l-40 400h-40v80h160v-720h320v800h-80v-720H560v720H240Z"/>
    </Icon>
  );
});

IconMaterialMicExternalOnFilled.displayName = 'OnesyIconMaterialMicExternalOnFilled';

export default IconMaterialMicExternalOnFilled;
