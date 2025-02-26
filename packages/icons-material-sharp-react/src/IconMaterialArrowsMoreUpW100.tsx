import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowsMoreUpW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowsMoreUpW100'

      short_name='ArrowsMoreUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M532-252v-360H172v-28h388v388h-28Zm148-147v-360H320v-28h388v388h-28Z"/>
    </Icon>
  );
});

IconMaterialArrowsMoreUpW100.displayName = 'OnesyIconMaterialArrowsMoreUpW100';

export default IconMaterialArrowsMoreUpW100;
