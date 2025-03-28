import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestFoundSavingsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestFoundSavingsFilled'

      short_name='NestFoundSavings'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-40 360-160H120v-720h720v720H600L480-40Zm0-280q86 0 143-60t57-140v-200H480q-81 0-140.5 57T280-520q0 30 8.5 57t23.5 50l-44 44 54 54 41-40q27 17 56 26t61 9ZM370-471l132-132 57 56-136 133-53-57Z"/>
    </Icon>
  );
});

IconMaterialNestFoundSavingsFilled.displayName = 'OnesyIconMaterialNestFoundSavingsFilled';

export default IconMaterialNestFoundSavingsFilled;
