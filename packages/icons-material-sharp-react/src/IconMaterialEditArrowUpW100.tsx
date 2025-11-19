import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEditArrowUpW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditArrowUpW100'

      short_name='EditArrowUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-212v-482l-64 64-20-20 98-98 98 98-20 20-64-64v482h-28Zm-588-74v-118l295-290q18-17 43-17t42 18l34 34q17 18 17 43t-18 42L292-286H172Zm28-28h81l206-203-40-39.5-40-39.5-207 203v79Zm307-223-80-79 80 79Z"/>
    </Icon>
  );
});

IconMaterialEditArrowUpW100.displayName = 'OnesyIconMaterialEditArrowUpW100';

export default IconMaterialEditArrowUpW100;
