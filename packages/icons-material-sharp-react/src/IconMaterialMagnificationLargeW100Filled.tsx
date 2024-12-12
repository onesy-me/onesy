import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMagnificationLargeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MagnificationLargeW100Filled'

      short_name='MagnificationLarge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M226-386h428v-268H226v268Zm-94 174v-536h696v536H132Z"/>
    </Icon>
  );
});

IconMaterialMagnificationLargeW100Filled.displayName = 'OnesyIconMaterialMagnificationLargeW100Filled';

export default IconMaterialMagnificationLargeW100Filled;
