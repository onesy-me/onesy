import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExpandLessW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandLessW100Filled'

      short_name='ExpandLess'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m296-380-20-20 204-204 204 204-20 20-184-184-184 184Z"/>
    </Icon>
  );
});

IconMaterialExpandLessW100Filled.displayName = 'OnesyIconMaterialExpandLessW100Filled';

export default IconMaterialExpandLessW100Filled;
