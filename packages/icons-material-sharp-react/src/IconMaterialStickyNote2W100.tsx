import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStickyNote2W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StickyNote2W100'

      short_name='StickyNote2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-200h360v-200h200v-360H200v560Zm-28 28v-616h616v391L563-172H172Zm154-256v-28h154v28H326Zm0-158v-28h308v28H326ZM200-200v-560 560Z"/>
    </Icon>
  );
});

IconMaterialStickyNote2W100.displayName = 'OnesyIconMaterialStickyNote2W100';

export default IconMaterialStickyNote2W100;
