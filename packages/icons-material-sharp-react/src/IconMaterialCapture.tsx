import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCapture = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Capture'

      short_name='Capture'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-320h480v-320H240v320ZM80-160v-640h800v640H80Zm80-80h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialCapture.displayName = 'OnesyIconMaterialCapture';

export default IconMaterialCapture;
