import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCurtainsClosedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurtainsClosedW100Filled'

      short_name='CurtainsClosed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-172v-28h80v-588h536v588h80v28H132Zm295-28h106v-560H427v560Z"/>
    </Icon>
  );
});

IconMaterialCurtainsClosedW100Filled.displayName = 'OnesyIconMaterialCurtainsClosedW100Filled';

export default IconMaterialCurtainsClosedW100Filled;
