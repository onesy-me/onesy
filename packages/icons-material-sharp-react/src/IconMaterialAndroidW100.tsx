import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAndroidW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AndroidW100'

      short_name='Android'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M128-291q8-86 53.04-157.85Q226.07-520.69 301-563l-59-102q-5-8-2.5-15.5T250-693q8-4 15-1.5t11.8 9.73L336-582q68.8-28.91 144-28.91T624-582l59.2-102.77Q688-692 695-694.5q7-2.5 15 1.5 8 5 10.5 12.5T718-665l-59 102q74.93 42.31 119.96 114.15Q824-377 832-291H128Zm192.14-88q16.86 0 28.36-11.64t11.5-28.5q0-16.86-11.64-28.36t-28.5-11.5q-16.86 0-28.36 11.64t-11.5 28.5q0 16.86 11.64 28.36t28.5 11.5Zm320 0q16.86 0 28.36-11.64t11.5-28.5q0-16.86-11.64-28.36t-28.5-11.5q-16.86 0-28.36 11.64t-11.5 28.5q0 16.86 11.64 28.36t28.5 11.5Z"/>
    </Icon>
  );
});

IconMaterialAndroidW100.displayName = 'OnesyIconMaterialAndroidW100';

export default IconMaterialAndroidW100;
