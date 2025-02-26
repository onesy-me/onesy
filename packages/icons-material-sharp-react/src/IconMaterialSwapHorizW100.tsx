import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwapHorizW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwapHorizW100'

      short_name='SwapHoriz'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M296-213 132-377l164-164 20 20-130 130h298v28H186l130 130-20 20Zm368-207-20-20 130-130H476v-28h298L644-728l20-20 164 164-164 164Z"/>
    </Icon>
  );
});

IconMaterialSwapHorizW100.displayName = 'OnesyIconMaterialSwapHorizW100';

export default IconMaterialSwapHorizW100;
