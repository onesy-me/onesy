import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSaveFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SaveFilled'

      short_name='Save'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M840-680v560H120v-720h560l160 160ZM480-240q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM240-560h360v-160H240v160Z"/>
    </Icon>
  );
});

IconMaterialSaveFilled.displayName = 'OnesyIconMaterialSaveFilled';

export default IconMaterialSaveFilled;
