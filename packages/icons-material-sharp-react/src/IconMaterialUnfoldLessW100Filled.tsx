import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUnfoldLessW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnfoldLessW100Filled'

      short_name='UnfoldLess'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m356-196-20-20 144-144 144 144-20 20-124-124-124 124Zm124-404L336-744l20-20 124 124 124-124 20 20-144 144Z"/>
    </Icon>
  );
});

IconMaterialUnfoldLessW100Filled.displayName = 'OnesyIconMaterialUnfoldLessW100Filled';

export default IconMaterialUnfoldLessW100Filled;
