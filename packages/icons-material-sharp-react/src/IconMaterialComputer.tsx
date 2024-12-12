import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialComputer = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Computer'

      short_name='Computer'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-120v-80h880v80H40Zm40-120v-600h800v600H80Zm80-80h640v-440H160v440Zm0 0v-440 440Z"/>
    </Icon>
  );
});

IconMaterialComputer.displayName = 'OnesyIconMaterialComputer';

export default IconMaterialComputer;
