import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMagnificationLargeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MagnificationLargeW100'

      short_name='MagnificationLarge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M226-386h428v-268H226v268Zm-94 174v-536h696v536H132Zm28-28h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialMagnificationLargeW100.displayName = 'OnesyIconMaterialMagnificationLargeW100';

export default IconMaterialMagnificationLargeW100;
