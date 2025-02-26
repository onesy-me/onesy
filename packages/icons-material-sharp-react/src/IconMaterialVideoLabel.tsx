import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideoLabel = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoLabel'

      short_name='VideoLabel'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h800v640H80Zm80-200h640v-360H160v360Z"/>
    </Icon>
  );
});

IconMaterialVideoLabel.displayName = 'OnesyIconMaterialVideoLabel';

export default IconMaterialVideoLabel;
