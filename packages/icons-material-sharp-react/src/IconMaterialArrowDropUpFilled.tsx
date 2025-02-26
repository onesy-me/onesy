import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowDropUpFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDropUpFilled'

      short_name='ArrowDropUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m280-400 200-200 200 200H280Z"/>
    </Icon>
  );
});

IconMaterialArrowDropUpFilled.displayName = 'OnesyIconMaterialArrowDropUpFilled';

export default IconMaterialArrowDropUpFilled;
