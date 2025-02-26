import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowsMoreDownW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowsMoreDownW100Filled'

      short_name='ArrowsMoreDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-172v-388h28v360h360v28H252Zm148-147v-388h28v360h360v28H400Z"/>
    </Icon>
  );
});

IconMaterialArrowsMoreDownW100Filled.displayName = 'OnesyIconMaterialArrowsMoreDownW100Filled';

export default IconMaterialArrowsMoreDownW100Filled;
