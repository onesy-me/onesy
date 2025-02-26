import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMagnificationLargeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MagnificationLargeFilled'

      short_name='MagnificationLarge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-360h480v-320H200v320ZM80-160v-640h800v640H80Z"/>
    </Icon>
  );
});

IconMaterialMagnificationLargeFilled.displayName = 'OnesyIconMaterialMagnificationLargeFilled';

export default IconMaterialMagnificationLargeFilled;
