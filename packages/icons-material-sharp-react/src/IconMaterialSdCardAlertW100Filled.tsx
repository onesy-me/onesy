import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSdCardAlertW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SdCardAlertW100Filled'

      short_name='SdCardAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-320h28v-48h-28v48Zm0-98h28v-182h-28v182Zm282 286H212v-486l210-210h326v696Z"/>
    </Icon>
  );
});

IconMaterialSdCardAlertW100Filled.displayName = 'OnesyIconMaterialSdCardAlertW100Filled';

export default IconMaterialSdCardAlertW100Filled;
