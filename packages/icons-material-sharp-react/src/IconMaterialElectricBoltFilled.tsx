import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialElectricBoltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricBoltFilled'

      short_name='ElectricBolt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m280-80 160-300-320-40 480-460h80L520-580l320 40L360-80h-80Z"/>
    </Icon>
  );
});

IconMaterialElectricBoltFilled.displayName = 'OnesyIconMaterialElectricBoltFilled';

export default IconMaterialElectricBoltFilled;
