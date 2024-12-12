import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStayPrimaryLandscapeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StayPrimaryLandscapeW100Filled'

      short_name='StayPrimaryLandscape'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M92-252v-456h776v456H92Zm122-28h532v-400H214v400Z"/>
    </Icon>
  );
});

IconMaterialStayPrimaryLandscapeW100Filled.displayName = 'OnesyIconMaterialStayPrimaryLandscapeW100Filled';

export default IconMaterialStayPrimaryLandscapeW100Filled;
