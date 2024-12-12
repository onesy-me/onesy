import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWindowOpenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindowOpenFilled'

      short_name='WindowOpen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-120v-720h640v720H160Zm120-400h160v-40h80v40h160v-200H280v200Zm-40 320h480v-560H240v560Z"/>
    </Icon>
  );
});

IconMaterialWindowOpenFilled.displayName = 'OnesyIconMaterialWindowOpenFilled';

export default IconMaterialWindowOpenFilled;
