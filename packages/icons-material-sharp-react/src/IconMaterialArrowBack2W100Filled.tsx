import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowBack2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowBack2W100Filled'

      short_name='ArrowBack2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M588-294 296-480l292-186v372Z"/>
    </Icon>
  );
});

IconMaterialArrowBack2W100Filled.displayName = 'OnesyIconMaterialArrowBack2W100Filled';

export default IconMaterialArrowBack2W100Filled;
