import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStat1 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Stat1'

      short_name='Stat1'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m296-345-56-56 240-240 240 240-56 56-184-183-184 183Z"/>
    </Icon>
  );
});

IconMaterialStat1.displayName = 'OnesyIconMaterialStat1';

export default IconMaterialStat1;
