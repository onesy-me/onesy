import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardArrowUpW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardArrowUpW100'

      short_name='KeyboardArrowUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-564 296-380l-20-20 204-204 204 204-20 20-184-184Z"/>
    </Icon>
  );
});

IconMaterialKeyboardArrowUpW100.displayName = 'OnesyIconMaterialKeyboardArrowUpW100';

export default IconMaterialKeyboardArrowUpW100;
