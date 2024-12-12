import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSquareFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SquareFilled'

      short_name='Square'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialSquareFilled.displayName = 'OnesyIconMaterialSquareFilled';

export default IconMaterialSquareFilled;
