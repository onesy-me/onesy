import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVisibilityLockW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VisibilityLockW100'

      short_name='VisibilityLock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-392q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm.33 140Q355-252 252-319.5 149-387 96-500q53-113 155.9-180.5T480-748q119 0 218.5 61.5T854-520h-33q-52-93-143-146.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280q17 0 34.33-1.5Q531.67-283 549-286v28q-17.17 2.57-34.34 4.29Q497.5-252 480.33-252ZM480-364q20.6 0 39.8-6 19.2-6 35.2-17 8-28 22.5-51t36.5-41q1-5 1.5-10.5t.5-10.5q0-56.67-39.74-96.33Q536.53-636 479.76-636q-56.76 0-96.26 39.74-39.5 39.73-39.5 96.5 0 56.76 39.67 96.26Q423.33-364 480-364Zm-5-136Zm154 329v-164h35v-40q0-26.81 19.13-45.91 19.14-19.09 46-19.09 26.87 0 45.37 19.09Q793-401.81 793-375v40h35v164H629Zm63-164h73v-40q0-17-9.5-27T729-412q-17 0-27 10t-10 27v40Z"/>
    </Icon>
  );
});

IconMaterialVisibilityLockW100.displayName = 'OnesyIconMaterialVisibilityLockW100';

export default IconMaterialVisibilityLockW100;
