import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialElectricBoltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricBoltW100'

      short_name='ElectricBolt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m315-131 162-275-305-35 441-388h34L480-553l308 34-441 388h-32Zm81-82 325-285-287-31 132-220-327 286 286 34-129 216Zm84-268Z"/>
    </Icon>
  );
});

IconMaterialElectricBoltW100.displayName = 'OnesyIconMaterialElectricBoltW100';

export default IconMaterialElectricBoltW100;
