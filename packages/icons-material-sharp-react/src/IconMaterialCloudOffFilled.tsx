import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCloudOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudOffFilled'

      short_name='CloudOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M792-56 686-160H260q-92 0-156-64T40-380q0-77 47.5-137T210-594q3-8 6-15.5t6-16.5L56-792l56-56 736 736-56 56Zm72-154L322-751q35-24 74.5-36.5T480-800q117 0 198.5 81.5T760-520q69 8 114.5 59.5T920-340q0 39-15 72.5T864-210Z"/>
    </Icon>
  );
});

IconMaterialCloudOffFilled.displayName = 'OnesyIconMaterialCloudOffFilled';

export default IconMaterialCloudOffFilled;
