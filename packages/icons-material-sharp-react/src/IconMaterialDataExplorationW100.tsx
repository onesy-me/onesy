import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDataExplorationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataExplorationW100'

      short_name='DataExploration'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-132q-72.21 0-135.72-27.39-63.51-27.39-110.49-74.35-46.98-46.96-74.39-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.41 63.56 27.4 110.57 74.38 47.02 46.98 74.44 110.49Q828-552.21 828-480v348H480Zm0-28q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 30 5 59t16 56l140-140 133 111 192-192H546v-28h148v148h-28v-99L455-355 324-467 194-337q39 79 115.45 128T480-160Zm288-4q11 0 19.5-8.5T796-192q0-11-8.5-19.5T768-220q-11 0-19.5 8.5T740-192q0 11 8.5 19.5T768-164ZM480-480Z"/>
    </Icon>
  );
});

IconMaterialDataExplorationW100.displayName = 'OnesyIconMaterialDataExplorationW100';

export default IconMaterialDataExplorationW100;
