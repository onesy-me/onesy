import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWidthNormalW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WidthNormalW100'

      short_name='WidthNormal'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h696v536H132Zm28-28h195v-480H160v480Zm223 0h194v-480H383v480Zm222 0h195v-480H605v480ZM383-720v480-480Z"/>
    </Icon>
  );
});

IconMaterialWidthNormalW100.displayName = 'OnesyIconMaterialWidthNormalW100';

export default IconMaterialWidthNormalW100;
