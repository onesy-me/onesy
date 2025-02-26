import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHovW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HovW100Filled'

      short_name='Hov'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-132 292-481l188-347 188 347-188 349Z"/>
    </Icon>
  );
});

IconMaterialHovW100Filled.displayName = 'OnesyIconMaterialHovW100Filled';

export default IconMaterialHovW100Filled;
