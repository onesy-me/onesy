import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHomeImprovementAndTools = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeImprovementAndTools'

      short_name='HomeImprovementAndTools'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-97q-8 0-15-2.5t-13-8.5l-69-69q-11-11-17-25.5t-6-30.5v-479l-75-105q-14-20-3-41.5t36-21.5h324q25 0 36 21.5t-3 41.5l-75 105v479q0 16-6 30.5T577-177l-69 69q-6 6-13 8.5T480-97Zm-40-463h80v-176l40-64H400l40 64v176Zm80 80h-80v80h80v-80Zm0 240v-80h-80v80l40 40 40-40Zm-40-320Zm0 160Zm0-160Zm0 80Zm0 160Z"/>
    </Icon>
  );
});

IconMaterialHomeImprovementAndTools.displayName = 'OnesyIconMaterialHomeImprovementAndTools';

export default IconMaterialHomeImprovementAndTools;
