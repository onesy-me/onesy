import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWidthWideW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WidthWideW100'

      short_name='WidthWide'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h696v536H132Zm28-28h132v-480H160v480Zm160 0h320v-480H320v480Zm348 0h132v-480H668v480ZM320-720v480-480Z"/>
    </Icon>
  );
});

IconMaterialWidthWideW100.displayName = 'OnesyIconMaterialWidthWideW100';

export default IconMaterialWidthWideW100;
