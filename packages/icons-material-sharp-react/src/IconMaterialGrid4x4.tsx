import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGrid4x4 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Grid4x4'

      short_name='Grid4x4'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-80v-120H80v-80h120v-160H80v-80h120v-160H80v-80h120v-120h80v120h160v-120h80v120h160v-120h80v120h120v80H760v160h120v80H760v160h120v80H760v120h-80v-120H520v120h-80v-120H280v120h-80Zm80-200h160v-160H280v160Zm240 0h160v-160H520v160ZM280-520h160v-160H280v160Zm240 0h160v-160H520v160Z"/>
    </Icon>
  );
});

IconMaterialGrid4x4.displayName = 'OnesyIconMaterialGrid4x4';

export default IconMaterialGrid4x4;
