import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMenuOpenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MenuOpenW100Filled'

      short_name='MenuOpen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-292v-28h438v28H172Zm596-35L613-480l155-152 20 20-135 132 135 133-20 20ZM172-466v-28h326v28H172Zm0-174v-28h438v28H172Z"/>
    </Icon>
  );
});

IconMaterialMenuOpenW100Filled.displayName = 'OnesyIconMaterialMenuOpenW100Filled';

export default IconMaterialMenuOpenW100Filled;
