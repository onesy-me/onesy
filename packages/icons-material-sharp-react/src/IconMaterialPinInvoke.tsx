import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPinInvoke = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinInvoke'

      short_name='PinInvoke'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h480v80H160v480h640v-240h80v320H80Zm322-145-56-57 118-118h-90v-80h226v226h-80v-89L402-305Zm358-255q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z"/>
    </Icon>
  );
});

IconMaterialPinInvoke.displayName = 'OnesyIconMaterialPinInvoke';

export default IconMaterialPinInvoke;
