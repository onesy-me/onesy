import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTabCloseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabCloseW100Filled'

      short_name='TabClose'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m450-457 84-84 84 84 19-19-84-84 84-84-19-19-84 84-84-84-19 19 84 84-84 84 19 19ZM266-292v-536h536v536H266ZM158-184v-504h28v476h476v28H158Z"/>
    </Icon>
  );
});

IconMaterialTabCloseW100Filled.displayName = 'OnesyIconMaterialTabCloseW100Filled';

export default IconMaterialTabCloseW100Filled;
