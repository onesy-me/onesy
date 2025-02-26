import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowRightW100Filled'

      short_name='ArrowRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M441.32-363q-6.32 0-10.82-4.13-4.5-4.12-4.5-10.87v-204q0-6.75 4.64-10.88 4.63-4.12 10.81-4.12 1.55 0 10.55 5l95.7 95.7q3.3 3.3 5.3 7.36 2 4.06 2 8.94 0 4.87-2 8.94-2 4.06-5.3 7.36l-95.72 95.72q-1.98 1.98-4.74 3.48-2.77 1.5-5.92 1.5Z"/>
    </Icon>
  );
});

IconMaterialArrowRightW100Filled.displayName = 'OnesyIconMaterialArrowRightW100Filled';

export default IconMaterialArrowRightW100Filled;
