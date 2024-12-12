import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowForwardIosW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowForwardIosW100Filled'

      short_name='ArrowForwardIos'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M616-480 303-793q-7-7-7-17t7-17q7-7 17-7t17 7l305 305q9 9 13 20t4 22q0 11-4 22t-13 20L337-133q-7 7-17 7t-17-7q-7-7-7-17t7-17l313-313Z"/>
    </Icon>
  );
});

IconMaterialArrowForwardIosW100Filled.displayName = 'OnesyIconMaterialArrowForwardIosW100Filled';

export default IconMaterialArrowForwardIosW100Filled;
