import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWidthNormalFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WidthNormalFilled'

      short_name='WidthNormal'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h800v640H80Zm80-80h160v-480H160v480Zm480 0h160v-480H640v480Z"/>
    </Icon>
  );
});

IconMaterialWidthNormalFilled.displayName = 'OnesyIconMaterialWidthNormalFilled';

export default IconMaterialWidthNormalFilled;
