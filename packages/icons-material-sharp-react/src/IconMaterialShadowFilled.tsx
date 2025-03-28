import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShadowFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShadowFilled'

      short_name='Shadow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-640h160v-160h640v640H720v160H80Zm240-240h480v-480H320v480Z"/>
    </Icon>
  );
});

IconMaterialShadowFilled.displayName = 'OnesyIconMaterialShadowFilled';

export default IconMaterialShadowFilled;
