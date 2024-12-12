import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOverviewKeyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OverviewKeyW100Filled'

      short_name='OverviewKey'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-252v-456h456v456H80Zm600 0v-456h28v456h-28Zm172 0v-456h28v456h-28Z"/>
    </Icon>
  );
});

IconMaterialOverviewKeyW100Filled.displayName = 'OnesyIconMaterialOverviewKeyW100Filled';

export default IconMaterialOverviewKeyW100Filled;
