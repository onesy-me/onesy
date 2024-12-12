import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWidthFullW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WidthFullW100'

      short_name='WidthFull'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h696v536H132Zm28-28h62v-480h-62v480Zm90 0h460v-480H250v480Zm488 0h62v-480h-62v480ZM250-720v480-480Z"/>
    </Icon>
  );
});

IconMaterialWidthFullW100.displayName = 'OnesyIconMaterialWidthFullW100';

export default IconMaterialWidthFullW100;
