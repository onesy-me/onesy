import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCookieW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CookieW100Filled'

      short_name='Cookie'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-106q-77.61 0-145.86-29.45-68.25-29.45-118.74-79.95-50.5-50.49-79.95-118.74Q106-402.39 106-480q0-78 30-146t81-119q51-51 118.5-80.5T478-855q13.57 0 27.78 1 14.22 1 28.22 3-1 45 12.5 80.5t39.5 61q26 25.5 63.5 39T735-655q-8 59 30 104t89 54q0 80.29-29.66 151.28t-80.5 124.36Q693-168 625.1-137q-67.9 31-145.1 31Zm-59.5-464q20.5 0 35-15t14.5-35.5q0-20.5-14.58-35Q440.83-670 420-670q-20 0-35 14.58-15 14.59-15 35.42 0 20 15 35t35.5 15Zm-80 200q20.5 0 35-15t14.5-35.5q0-20.5-14.58-35Q360.83-470 340-470q-20 0-35 14.58-15 14.59-15 35.42 0 20 15 35t35.5 15Zm260 40q12.5 0 21-9t8.5-21.5q0-12.5-8.62-21-8.63-8.5-21.38-8.5-12 0-21 8.62-9 8.63-9 21.38 0 12 9 21t21.5 9Z"/>
    </Icon>
  );
});

IconMaterialCookieW100Filled.displayName = 'OnesyIconMaterialCookieW100Filled';

export default IconMaterialCookieW100Filled;
