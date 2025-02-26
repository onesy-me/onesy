import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCrop169Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop169Filled'

      short_name='Crop169'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-280v-400h720v400H120Z"/>
    </Icon>
  );
});

IconMaterialCrop169Filled.displayName = 'OnesyIconMaterialCrop169Filled';

export default IconMaterialCrop169Filled;
