import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilterW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterW100Filled'

      short_name='Filter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M368-416h332L598-552 498-428l-64-74-66 86ZM266-292v-536h536v536H266ZM158-184v-504h28v476h476v28H158Z"/>
    </Icon>
  );
});

IconMaterialFilterW100Filled.displayName = 'OnesyIconMaterialFilterW100Filled';

export default IconMaterialFilterW100Filled;
