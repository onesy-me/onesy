import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowOutwardFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowOutwardFilled'

      short_name='ArrowOutward'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/>
    </Icon>
  );
});

IconMaterialArrowOutwardFilled.displayName = 'OnesyIconMaterialArrowOutwardFilled';

export default IconMaterialArrowOutwardFilled;
