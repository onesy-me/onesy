import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScreenshotTabletFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenshotTabletFilled'

      short_name='ScreenshotTablet'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-160q-33 0-56.5-23.5T40-240v-480q0-33 23.5-56.5T120-800h720q33 0 56.5 23.5T920-720v480q0 33-23.5 56.5T840-160H120Zm120-80h480v-480H240v480Zm380-100h-70q-13 0-21.5 8.5T520-310q0 13 8.5 21.5T550-280h100q13 0 21.5-8.5T680-310v-100q0-13-8.5-21.5T650-440q-13 0-21.5 8.5T620-410v70ZM340-620h70q13 0 21.5-8.5T440-650q0-13-8.5-21.5T410-680H310q-13 0-21.5 8.5T280-650v100q0 13 8.5 21.5T310-520q13 0 21.5-8.5T340-550v-70Z"/>
    </Icon>
  );
});

IconMaterialScreenshotTabletFilled.displayName = 'OnesyIconMaterialScreenshotTabletFilled';

export default IconMaterialScreenshotTabletFilled;
