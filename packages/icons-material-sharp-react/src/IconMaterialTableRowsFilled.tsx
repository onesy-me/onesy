import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTableRowsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableRowsFilled'

      short_name='TableRows'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M840-120H120v-186h720v186Zm0-266H120v-189h720v189Zm0-269H120v-185h720v185Z"/>
    </Icon>
  );
});

IconMaterialTableRowsFilled.displayName = 'OnesyIconMaterialTableRowsFilled';

export default IconMaterialTableRowsFilled;
