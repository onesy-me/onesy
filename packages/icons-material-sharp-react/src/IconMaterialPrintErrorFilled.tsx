import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPrintErrorFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintErrorFilled'

      short_name='PrintError'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-120q-17 0-28.5-11.5T720-160q0-17 11.5-28.5T760-200q17 0 28.5 11.5T800-160q0 17-11.5 28.5T760-120Zm-40-160v-200h80v200h-80ZM240-120v-160H80v-360h793v80H640v200H320v160h320v80H240Zm0-560v-160h480v160H240Z"/>
    </Icon>
  );
});

IconMaterialPrintErrorFilled.displayName = 'OnesyIconMaterialPrintErrorFilled';

export default IconMaterialPrintErrorFilled;
