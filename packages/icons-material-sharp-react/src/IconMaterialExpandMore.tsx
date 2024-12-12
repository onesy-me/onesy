import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExpandMore = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandMore'

      short_name='ExpandMore'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"/>
    </Icon>
  );
});

IconMaterialExpandMore.displayName = 'OnesyIconMaterialExpandMore';

export default IconMaterialExpandMore;
