import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMenuW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MenuW100'

      short_name='Menu'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-278v-28h616v28H172Zm0-188v-28h616v28H172Zm0-188v-28h616v28H172Z"/>
    </Icon>
  );
});

IconMaterialMenuW100.displayName = 'OnesyIconMaterialMenuW100';

export default IconMaterialMenuW100;
