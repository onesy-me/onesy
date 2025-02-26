import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHorizontalSplitW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HorizontalSplitW100Filled'

      short_name='HorizontalSplit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-252v-240h616v240H172Zm0-320v-28h616v28H172Zm0-108v-28h616v28H172Z"/>
    </Icon>
  );
});

IconMaterialHorizontalSplitW100Filled.displayName = 'OnesyIconMaterialHorizontalSplitW100Filled';

export default IconMaterialHorizontalSplitW100Filled;
