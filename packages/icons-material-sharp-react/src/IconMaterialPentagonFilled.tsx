import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPentagonFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PentagonFilled'

      short_name='Pentagon'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-120 80-600l400-280 400 280-160 480H240Z"/>
    </Icon>
  );
});

IconMaterialPentagonFilled.displayName = 'OnesyIconMaterialPentagonFilled';

export default IconMaterialPentagonFilled;
