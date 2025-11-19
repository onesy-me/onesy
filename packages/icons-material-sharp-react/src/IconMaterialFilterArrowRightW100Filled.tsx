import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilterArrowRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterArrowRightW100Filled'

      short_name='FilterArrowRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M398-212v-278L149-749h601L501-490v278H398Zm353-46-20-19 83-80H621v-28h193l-83-80 20-20 117 114-117 113ZM450-476l234-245H216l234 245Z"/>
    </Icon>
  );
});

IconMaterialFilterArrowRightW100Filled.displayName = 'OnesyIconMaterialFilterArrowRightW100Filled';

export default IconMaterialFilterArrowRightW100Filled;
