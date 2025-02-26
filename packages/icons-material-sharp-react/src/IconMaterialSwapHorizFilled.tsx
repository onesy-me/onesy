import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwapHorizFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwapHorizFilled'

      short_name='SwapHoriz'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-160 80-360l200-200 56 57-103 103h287v80H233l103 103-56 57Zm400-240-56-57 103-103H440v-80h287L624-743l56-57 200 200-200 200Z"/>
    </Icon>
  );
});

IconMaterialSwapHorizFilled.displayName = 'OnesyIconMaterialSwapHorizFilled';

export default IconMaterialSwapHorizFilled;
