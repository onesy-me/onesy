import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRecentActorsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RecentActorsFilled'

      short_name='RecentActors'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-200v-560h560v560H40Zm80-146q44-26 94-40t106-14q56 0 106 14t94 40v-334H120v334Zm200-84q-46 0-78-32t-32-78q0-46 32-78t78-32q46 0 78 32t32 78q0 46-32 78t-78 32Zm360 230v-560h80v560h-80Zm160 0v-560h80v560h-80Z"/>
    </Icon>
  );
});

IconMaterialRecentActorsFilled.displayName = 'OnesyIconMaterialRecentActorsFilled';

export default IconMaterialRecentActorsFilled;
