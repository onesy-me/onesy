import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlagFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlagFilled'

      short_name='Flag'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-400v240q0 17-11.5 28.5T240-120q-17 0-28.5-11.5T200-160v-600q0-17 11.5-28.5T240-800h287q14 0 25 9t14 23l10 48h184q17 0 28.5 11.5T800-680v320q0 17-11.5 28.5T760-320H553q-14 0-25-9t-14-23l-10-48H280Z"/>
    </Icon>
  );
});

IconMaterialFlagFilled.displayName = 'OnesyIconMaterialFlagFilled';

export default IconMaterialFlagFilled;
