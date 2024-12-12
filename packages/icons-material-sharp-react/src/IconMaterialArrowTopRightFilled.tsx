import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowTopRightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowTopRightFilled'

      short_name='ArrowTopRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-160v-480h447L503-783l57-57 240 240-241 241-56-57 144-144H280v400h-80Z"/>
    </Icon>
  );
});

IconMaterialArrowTopRightFilled.displayName = 'OnesyIconMaterialArrowTopRightFilled';

export default IconMaterialArrowTopRightFilled;
