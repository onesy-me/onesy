import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilter1W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter1W100Filled'

      short_name='Filter1'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-386h28v-348H480v28h80v320Zm-294 94v-536h536v536H266ZM158-184v-504h28v476h476v28H158Z"/>
    </Icon>
  );
});

IconMaterialFilter1W100Filled.displayName = 'OnesyIconMaterialFilter1W100Filled';

export default IconMaterialFilter1W100Filled;
