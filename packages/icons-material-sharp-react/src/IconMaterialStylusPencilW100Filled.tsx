import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStylusPencilW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StylusPencilW100Filled'

      short_name='StylusPencil'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m288-356 170-432h43l170 432H288Zm-76 184 31-84h474l31 84H212Z"/>
    </Icon>
  );
});

IconMaterialStylusPencilW100Filled.displayName = 'OnesyIconMaterialStylusPencilW100Filled';

export default IconMaterialStylusPencilW100Filled;
