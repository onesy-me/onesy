import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMarginFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarginFilled'

      short_name='Margin'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm160-480h80v-80h-80v80Zm160 0h80v-80h-80v80Zm160 0h80v-80h-80v80ZM280-440h80v-80h-80v80Zm160 0h80v-80h-80v80Zm160 0h80v-80h-80v80Z"/>
    </Icon>
  );
});

IconMaterialMarginFilled.displayName = 'OnesyIconMaterialMarginFilled';

export default IconMaterialMarginFilled;
