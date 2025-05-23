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
      <path d="m185-560-77-74q-12-11-11.5-28t11.5-28q11-11 28-11t28 11l38 38v-8q2-13 7.5-24t14.5-20l113-113q11-11 25.5-17t30.5-6h174q16 0 30.5 6t25.5 17l113 113q9 9 14.5 20.5T758-659v7l38-38q11-11 28-11t28 11q12 12 11.5 28.5T851-634l-76 74H185Zm463 400H312q-32 0-55-21t-25-53l-20-264h536l-20 264q-2 32-25 53t-55 21Z"/>
    </Icon>
  );
});

IconMaterialTakeoutDiningFilled.displayName = 'OnesyIconMaterialTakeoutDiningFilled';

export default IconMaterialTakeoutDiningFilled;
