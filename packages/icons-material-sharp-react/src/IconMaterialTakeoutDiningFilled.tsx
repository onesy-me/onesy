import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTakeoutDiningFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TakeoutDiningFilled'

      short_name='TakeoutDining'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M185-560 80-662l56-56 64 64-2-24 162-162h240l162 162-2 24 64-64 56 56-105 102H185Zm53 400-26-338h536l-26 338H238Z"/>
    </Icon>
  );
});

IconMaterialTakeoutDiningFilled.displayName = 'OnesyIconMaterialTakeoutDiningFilled';

export default IconMaterialTakeoutDiningFilled;
