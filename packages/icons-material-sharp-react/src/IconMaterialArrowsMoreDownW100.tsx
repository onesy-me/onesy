import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowsMoreDownW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowsMoreDownW100'

      short_name='ArrowsMoreDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-172v-388h28v360h360v28H252Zm148-148v-388h28v360h360v28H400Z"/>
    </Icon>
  );
});

IconMaterialArrowsMoreDownW100.displayName = 'OnesyIconMaterialArrowsMoreDownW100';

export default IconMaterialArrowsMoreDownW100;
