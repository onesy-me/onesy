import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWindowClosedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindowClosedFilled'

      short_name='WindowClosed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-120v-720h640v720H160Zm120-400h160v-40h80v40h160v-200H280v200Zm0 280h400v-200H280v200Zm-40 40h480v-560H240v560Z"/>
    </Icon>
  );
});

IconMaterialWindowClosedFilled.displayName = 'OnesyIconMaterialWindowClosedFilled';

export default IconMaterialWindowClosedFilled;
