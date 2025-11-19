import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialComputerArrowUp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ComputerArrowUp'

      short_name='ComputerArrowUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-380h80v-167l64 63 56-56-160-160-160 160 56 57 64-64v167ZM40-120v-80h880v80H40Zm40-120v-600h800v600H80Zm80-80h640v-440H160v440Zm0 0v-440 440Z"/>
    </Icon>
  );
});

IconMaterialComputerArrowUp.displayName = 'OnesyIconMaterialComputerArrowUp';

export default IconMaterialComputerArrowUp;
