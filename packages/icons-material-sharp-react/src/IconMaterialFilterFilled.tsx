import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilterFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterFilled'

      short_name='Filter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-400h400L622-580l-92 120-62-80-108 140ZM240-240v-640h640v640H240ZM80-80v-640h80v560h560v80H80Z"/>
    </Icon>
  );
});

IconMaterialFilterFilled.displayName = 'OnesyIconMaterialFilterFilled';

export default IconMaterialFilterFilled;
