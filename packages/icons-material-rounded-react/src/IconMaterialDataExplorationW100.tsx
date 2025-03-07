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
      <path d="M480-132q-72.21 0-135.72-27.39-63.51-27.39-110.49-74.35-46.98-46.96-74.39-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.41 63.56 27.4 110.57 74.38 47.02 46.98 74.44 110.49Q828-552.21 828-480v288q0 24.75-17.62 42.37Q792.75-132 768-132H480Zm0-28q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 30 5 59t16 56l121-121q8.12-8.25 19.56-8.63Q333-495 342-487l112 93 192-192h-86q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h104q12.75 0 21.38 8.62Q694-596.75 694-584v104q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-85L475-375q-8 8-19.9 9-11.89 1-21.1-7l-110-94-130 130q39 79 115.45 128T480-160Zm288-4q11 0 19.5-8.5T796-192q0-11-8.5-19.5T768-220q-11 0-19.5 8.5T740-192q0 11 8.5 19.5T768-164ZM480-480Z"/>
    </Icon>
  );
});

IconMaterialDataExplorationW100.displayName = 'OnesyIconMaterialDataExplorationW100';

export default IconMaterialDataExplorationW100;
