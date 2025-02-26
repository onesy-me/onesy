import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWindowOpenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindowOpenW100Filled'

      short_name='WindowOpen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-172v-616h536v616H212Zm56-322h184v-28h56v28h184v-238H268v238Zm-28 294h480v-560H240v560Z"/>
    </Icon>
  );
});

IconMaterialWindowOpenW100Filled.displayName = 'OnesyIconMaterialWindowOpenW100Filled';

export default IconMaterialWindowOpenW100Filled;
