import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExplicit = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Explicit'

      short_name='Explicit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-280h240v-80H440v-80h160v-80H440v-80h160v-80H360v400ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialExplicit.displayName = 'OnesyIconMaterialExplicit';

export default IconMaterialExplicit;
