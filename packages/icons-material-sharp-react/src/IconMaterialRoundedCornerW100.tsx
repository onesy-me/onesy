import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRoundedCornerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoundedCornerW100'

      short_name='RoundedCorner'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Zm0-144v-40h40v40h-40Zm144 576v-40h40v40h-40Zm0-576v-40h40v40h-40Zm144 576v-40h40v40h-40Zm144 0v-40h40v40h-40Zm144 0v-40h40v40h-40Zm0-144v-40h40v40h-40Zm40-144h-28v-164q0-56.67-39.67-96.33Q680.67-760 624-760H460v-28h164q69 0 116.5 47.5T788-624v164Z"/>
    </Icon>
  );
});

IconMaterialRoundedCornerW100.displayName = 'OnesyIconMaterialRoundedCornerW100';

export default IconMaterialRoundedCornerW100;
