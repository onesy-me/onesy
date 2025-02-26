import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUnfoldMoreFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnfoldMoreFilled'

      short_name='UnfoldMore'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-120 300-300l58-58 122 122 122-122 58 58-180 180ZM358-598l-58-58 180-180 180 180-58 58-122-122-122 122Z"/>
    </Icon>
  );
});

IconMaterialUnfoldMoreFilled.displayName = 'OnesyIconMaterialUnfoldMoreFilled';

export default IconMaterialUnfoldMoreFilled;
