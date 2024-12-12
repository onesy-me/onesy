import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStat3 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Stat3'

      short_name='Stat3'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m296-105-56-56 240-240 240 240-56 56-184-183-184 183Zm0-240-56-56 240-240 240 240-56 56-184-183-184 183Zm0-240-56-56 240-240 240 240-56 56-184-183-184 183Z"/>
    </Icon>
  );
});

IconMaterialStat3.displayName = 'OnesyIconMaterialStat3';

export default IconMaterialStat3;
