import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStayCurrentLandscapeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StayCurrentLandscapeW100Filled'

      short_name='StayCurrentLandscape'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M92-252v-456h776v456H92Zm122-28h532v-400H214v400Z"/>
    </Icon>
  );
});

IconMaterialStayCurrentLandscapeW100Filled.displayName = 'OnesyIconMaterialStayCurrentLandscapeW100Filled';

export default IconMaterialStayCurrentLandscapeW100Filled;
