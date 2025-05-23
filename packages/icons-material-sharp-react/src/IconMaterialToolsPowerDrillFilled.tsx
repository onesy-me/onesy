import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialToolsPowerDrillFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToolsPowerDrillFilled'

      short_name='ToolsPowerDrill'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-560h240v-60H240v60Zm0-100h240v-60H240v60Zm440 140v-240h80l40 40v40h120v80H800v40l-40 40h-80ZM240-340v-100q-66 0-113-47T80-600v-80q0-66 47-113t113-47h400v400H480v100H240Zm-80 220v-180h400v180H160Z"/>
    </Icon>
  );
});

IconMaterialToolsPowerDrillFilled.displayName = 'OnesyIconMaterialToolsPowerDrillFilled';

export default IconMaterialToolsPowerDrillFilled;
