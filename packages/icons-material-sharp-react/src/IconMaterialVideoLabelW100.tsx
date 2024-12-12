import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideoLabelW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoLabelW100'

      short_name='VideoLabel'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h696v536H132Zm28-148h640v-360H160v360Z"/>
    </Icon>
  );
});

IconMaterialVideoLabelW100.displayName = 'OnesyIconMaterialVideoLabelW100';

export default IconMaterialVideoLabelW100;
