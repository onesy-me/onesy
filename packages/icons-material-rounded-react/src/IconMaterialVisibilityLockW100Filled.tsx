import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVisibilityLockW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VisibilityLockW100Filled'

      short_name='VisibilityLock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M659-171q-12.75 0-21.37-8.63Q629-188.25 629-201v-105q0-13 10.5-21t24.5-8v-40q0-26.81 19.13-45.91 19.14-19.09 46-19.09 26.87 0 45.37 19.09Q793-401.81 793-375v40q14 0 24.5 8t10.5 21v105q0 12.75-8.62 21.37Q810.75-171 798-171H659Zm33-164h73v-40q0-17-9.5-27T729-412q-17 0-27 10t-10 27v40Zm-212-57q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 140q-115.01 0-215.01-59.5Q165-371 110.8-472.35q-3.8-6.65-5.3-13.15T104-500q0-8 1.5-14.5t5.3-13.15Q165-629 264.99-688.5 364.99-748 480-748q60.35 0 115.17 16Q650-716 699-686q37.81 23.29 69.91 53.64Q801-602 827-565q10 14 1.25 29.5T802-520h-73q-33.03 0-62.51 10.5Q637-499 614-479q1-5 1.5-10.5t.5-10.5q0-56.67-39.74-96.33Q536.53-636 479.76-636q-56.76 0-96.26 39.74-39.5 39.73-39.5 96.5 0 56.76 39.67 96.26Q423.33-364 480-364q20.6 0 39.8-6 19.2-6 35.2-17-3 11-4.5 22.5T549-341v55.35q0 11.65-7.5 20.88Q534-255.54 522-254q-10.5 1-21 1.5t-21 .5Z"/>
    </Icon>
  );
});

IconMaterialVisibilityLockW100Filled.displayName = 'OnesyIconMaterialVisibilityLockW100Filled';

export default IconMaterialVisibilityLockW100Filled;
