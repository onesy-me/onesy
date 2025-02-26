import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowBackIosNewFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowBackIosNewFilled'

      short_name='ArrowBackIosNew'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z"/>
    </Icon>
  );
});

IconMaterialArrowBackIosNewFilled.displayName = 'OnesyIconMaterialArrowBackIosNewFilled';

export default IconMaterialArrowBackIosNewFilled;
