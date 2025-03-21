import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowDropUpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDropUpW100Filled'

      short_name='ArrowDropUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M378-426q-6.75 0-10.87-4.64-4.13-4.63-4.13-10.81 0-1.55 5-10.55l95.7-95.7q3.3-3.3 7.36-5.3 4.07-2 8.94-2 4.88 0 8.94 2t7.36 5.3l95.72 95.72q1.98 1.98 3.48 4.74 1.5 2.77 1.5 5.92 0 6.32-4.12 10.82-4.13 4.5-10.88 4.5H378Z"/>
    </Icon>
  );
});

IconMaterialArrowDropUpW100Filled.displayName = 'OnesyIconMaterialArrowDropUpW100Filled';

export default IconMaterialArrowDropUpW100Filled;
