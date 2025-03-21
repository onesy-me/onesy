import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVerticalDistributeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalDistributeFilled'

      short_name='VerticalDistribute'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-80h800v80H80Zm200-340v-120h400v120H280ZM80-800v-80h800v80H80Z"/>
    </Icon>
  );
});

IconMaterialVerticalDistributeFilled.displayName = 'OnesyIconMaterialVerticalDistributeFilled';

export default IconMaterialVerticalDistributeFilled;
