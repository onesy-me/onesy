import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowsMoreUp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowsMoreUp'

      short_name='ArrowsMoreUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-200v-360H120v-80h440v440h-80Zm200-200v-360H320v-80h440v440h-80Z"/>
    </Icon>
  );
});

IconMaterialArrowsMoreUp.displayName = 'OnesyIconMaterialArrowsMoreUp';

export default IconMaterialArrowsMoreUp;
