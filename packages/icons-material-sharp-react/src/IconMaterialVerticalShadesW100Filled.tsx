import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVerticalShadesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalShadesW100Filled'

      short_name='VerticalShades'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-172v-28h80v-588h536v588h80v28H132Zm255-28h186v-560H387v560Z"/>
    </Icon>
  );
});

IconMaterialVerticalShadesW100Filled.displayName = 'OnesyIconMaterialVerticalShadesW100Filled';

export default IconMaterialVerticalShadesW100Filled;
