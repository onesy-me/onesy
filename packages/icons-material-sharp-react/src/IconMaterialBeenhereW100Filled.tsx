import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBeenhereW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BeenhereW100Filled'

      short_name='Beenhere'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-104 212-305v-523h536v523L480-104Zm-42-292 190-190-20-20-170 170-86-86-20 20 106 106Z"/>
    </Icon>
  );
});

IconMaterialBeenhereW100Filled.displayName = 'OnesyIconMaterialBeenhereW100Filled';

export default IconMaterialBeenhereW100Filled;
