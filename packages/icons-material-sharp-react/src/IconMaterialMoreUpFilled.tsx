import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMoreUpFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoreUpFilled'

      short_name='MoreUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-320v-360H320v-80h440v440h-80ZM480-120v-360H120v-80h440v440h-80Z"/>
    </Icon>
  );
});

IconMaterialMoreUpFilled.displayName = 'OnesyIconMaterialMoreUpFilled';

export default IconMaterialMoreUpFilled;
