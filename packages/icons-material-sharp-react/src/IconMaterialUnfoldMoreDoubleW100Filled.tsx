import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUnfoldMoreDoubleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnfoldMoreDoubleW100Filled'

      short_name='UnfoldMoreDouble'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M481-74 334-220l20-20 127 126 126-126 20 20L481-74Zm0-200L334-420l20-20 127 126 126-126 20 20-146 146ZM354-520l-20-21 146-146 147 147-20 20-127-126-126 126Zm0-200-20-21 146-146 147 147-20 20-127-126-126 126Z"/>
    </Icon>
  );
});

IconMaterialUnfoldMoreDoubleW100Filled.displayName = 'OnesyIconMaterialUnfoldMoreDoubleW100Filled';

export default IconMaterialUnfoldMoreDoubleW100Filled;
