import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowOutwardW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowOutwardW100Filled'

      short_name='ArrowOutward'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m245-277-19-19 409-410H255v-28h428v428h-28v-380L245-277Z"/>
    </Icon>
  );
});

IconMaterialArrowOutwardW100Filled.displayName = 'OnesyIconMaterialArrowOutwardW100Filled';

export default IconMaterialArrowOutwardW100Filled;
