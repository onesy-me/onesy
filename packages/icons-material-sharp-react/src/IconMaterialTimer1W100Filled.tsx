import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTimer1W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Timer1W100Filled'

      short_name='Timer1'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-246v-440H372v-28h176v468h-28Z"/>
    </Icon>
  );
});

IconMaterialTimer1W100Filled.displayName = 'OnesyIconMaterialTimer1W100Filled';

export default IconMaterialTimer1W100Filled;
