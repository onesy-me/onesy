import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPageHeaderFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PageHeaderFilled'

      short_name='PageHeader'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-760v-80h720v80H120Zm0 640v-560h720v560H120Z"/>
    </Icon>
  );
});

IconMaterialPageHeaderFilled.displayName = 'OnesyIconMaterialPageHeaderFilled';

export default IconMaterialPageHeaderFilled;
