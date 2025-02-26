import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowDropUpW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDropUpW100'

      short_name='ArrowDropUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m342-426 138-138 138 138H342Z"/>
    </Icon>
  );
});

IconMaterialArrowDropUpW100.displayName = 'OnesyIconMaterialArrowDropUpW100';

export default IconMaterialArrowDropUpW100;
