import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScreenLockRotation = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenLockRotation'

      short_name='ScreenLockRotation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M22.3 13.77l-2.57-2.57-1.41 1.41 2.22 2.22-5.66 5.66L3.56 9.17l5.66-5.66 2.1 2.1 1.41-1.41-2.45-2.45c-.59-.59-1.54-.59-2.12 0L1.8 8.11c-.59.59-.59 1.54 0 2.12l12.02 12.02c.59.59 1.54.59 2.12 0l6.36-6.36c.59-.59.59-1.54 0-2.12zM7.52 21.48C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.82-1.33 1.33zM15.05 10h5c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1v-.5c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5V4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm.8-6.5c0-.94.76-1.7 1.7-1.7s1.7.76 1.7 1.7V4h-3.4v-.5z"/>
    </Icon>
  );
});

IconMaterialScreenLockRotation.displayName = 'OnesyIconMaterialScreenLockRotation';

export default IconMaterialScreenLockRotation;
