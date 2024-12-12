import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardArrowDownW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardArrowDownW100'

      short_name='KeyboardArrowDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-380 276-584l20-20 184 184 184-184 20 20-204 204Z"/>
    </Icon>
  );
});

IconMaterialKeyboardArrowDownW100.displayName = 'OnesyIconMaterialKeyboardArrowDownW100';

export default IconMaterialKeyboardArrowDownW100;
