import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCrop54Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop54Filled'

      short_name='Crop54'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-160v-640h720v640H120Z"/>
    </Icon>
  );
});

IconMaterialCrop54Filled.displayName = 'OnesyIconMaterialCrop54Filled';

export default IconMaterialCrop54Filled;
