import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilter2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter2W100Filled'

      short_name='Filter2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-386h188v-28H468v-132h160v-188H440v28h160v132H440v188Zm-174 94v-536h536v536H266ZM158-184v-504h28v476h476v28H158Z"/>
    </Icon>
  );
});

IconMaterialFilter2W100Filled.displayName = 'OnesyIconMaterialFilter2W100Filled';

export default IconMaterialFilter2W100Filled;
