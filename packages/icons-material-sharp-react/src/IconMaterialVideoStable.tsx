import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideoStable = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoStable'

      short_name='VideoStable'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h800v640H80Zm80-80h640v-480H160v480Zm519 0 92-346-488-134-92 346 488 134Zm-57-98-333-92 51-192 333 92-51 192Zm-462 98v-480 480Z"/>
    </Icon>
  );
});

IconMaterialVideoStable.displayName = 'OnesyIconMaterialVideoStable';

export default IconMaterialVideoStable;
