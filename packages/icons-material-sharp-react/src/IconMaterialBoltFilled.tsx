import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBoltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BoltFilled'

      short_name='Bolt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m320-80 40-280H160l360-520h80l-40 320h240L400-80h-80Z"/>
    </Icon>
  );
});

IconMaterialBoltFilled.displayName = 'OnesyIconMaterialBoltFilled';

export default IconMaterialBoltFilled;
