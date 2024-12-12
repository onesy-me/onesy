import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPipExitFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PipExitFilled'

      short_name='PipExit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-360h360v-280h440v640H80Zm603-140 57-57-124-123h104v-80H480v240h80v-103l123 123ZM80-600v-200h280v200H80Z"/>
    </Icon>
  );
});

IconMaterialPipExitFilled.displayName = 'OnesyIconMaterialPipExitFilled';

export default IconMaterialPipExitFilled;
