import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFastForwardW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FastForwardW100Filled'

      short_name='FastForward'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M183-312v-336l252 168-252 168Zm342 0v-336l252 168-252 168Z"/>
    </Icon>
  );
});

IconMaterialFastForwardW100Filled.displayName = 'OnesyIconMaterialFastForwardW100Filled';

export default IconMaterialFastForwardW100Filled;
