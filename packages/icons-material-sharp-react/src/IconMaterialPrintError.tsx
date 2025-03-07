import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPrintError = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintError'

      short_name='PrintError'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-120v-160H80v-360h793v80H160v200h80v-80h400v80H320v160h320v80H240Zm0-520v-200h480v200h-80v-120H320v120h-80Zm520 520q-17 0-28.5-11.5T720-160q0-17 11.5-28.5T760-200q17 0 28.5 11.5T800-160q0 17-11.5 28.5T760-120Zm-40-160v-200h80v200h-80ZM160-560h713-713Z"/>
    </Icon>
  );
});

IconMaterialPrintError.displayName = 'OnesyIconMaterialPrintError';

export default IconMaterialPrintError;
