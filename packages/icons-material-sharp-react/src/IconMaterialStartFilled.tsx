import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStartFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StartFilled'

      short_name='Start'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-240v-480h80v480H80Zm560 0-57-56 144-144H240v-80h487L584-664l56-56 240 240-240 240Z"/>
    </Icon>
  );
});

IconMaterialStartFilled.displayName = 'OnesyIconMaterialStartFilled';

export default IconMaterialStartFilled;
