import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialComputerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ComputerFilled'

      short_name='Computer'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-120v-80h880v80H40Zm40-120v-600h800v600H80Z"/>
    </Icon>
  );
});

IconMaterialComputerFilled.displayName = 'OnesyIconMaterialComputerFilled';

export default IconMaterialComputerFilled;
