import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialReorderW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReorderW100Filled'

      short_name='Reorder'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-252v-28h616v28H172Zm0-143v-28h616v28H172Zm0-142v-28h616v28H172Zm0-143v-28h616v28H172Z"/>
    </Icon>
  );
});

IconMaterialReorderW100Filled.displayName = 'OnesyIconMaterialReorderW100Filled';

export default IconMaterialReorderW100Filled;
