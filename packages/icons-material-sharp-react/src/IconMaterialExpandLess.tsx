import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExpandLess = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandLess'

      short_name='ExpandLess'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m296-345-56-56 240-240 240 240-56 56-184-184-184 184Z"/>
    </Icon>
  );
});

IconMaterialExpandLess.displayName = 'OnesyIconMaterialExpandLess';

export default IconMaterialExpandLess;
