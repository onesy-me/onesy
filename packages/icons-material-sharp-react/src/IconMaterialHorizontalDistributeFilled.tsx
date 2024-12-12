import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHorizontalDistributeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HorizontalDistributeFilled'

      short_name='HorizontalDistribute'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-800h80v800H80Zm340-200v-400h120v400H420ZM800-80v-800h80v800h-80Z"/>
    </Icon>
  );
});

IconMaterialHorizontalDistributeFilled.displayName = 'OnesyIconMaterialHorizontalDistributeFilled';

export default IconMaterialHorizontalDistributeFilled;
