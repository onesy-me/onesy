import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSurfing = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Surfing'

      short_name='Surfing'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-40v-80h40q32 0 62-10t58-30q28 20 58 29.5t62 9.5q32 0 62.5-9.5T480-160q28 20 58 29.5t62 9.5q32 0 62.5-9.5T720-160q27 20 57.5 30t62.5 10h40v80h-40q-31 0-61-7.5T720-70q-29 15-59 22.5T600-40q-31 0-61-7.5T480-70q-29 15-59 22.5T360-40q-31 0-61-7.5T240-70q-29 15-59 22.5T120-40H80Zm260-760 222 41q14 2 27 11t22 25l35 62q26 45 72 73t102 28v80q-78 0-142-39T577-621l-90 61 153 120v154q16 11 31 23t29 23q-21 18-46 29t-54 11q-36 0-67-17t-53-43q-22 26-53 43t-67 17q-10 0-19.5-1.5T322-206q-86-59-144-119t-58-104q0-31 24-41t50-10q29 0 67 8.5t81 24.5l-29-169 125-84q-3 0-14.5-2.5t-25.5-5-25.5-5Q361-715 358-715l-113 77-45-66 140-96Zm72 284 18 106q27 13 67 34.5t63 35.5v-60L412-516Zm268-224q-33 0-56.5-23.5T600-820q0-33 23.5-56.5T680-900q33 0 56.5 23.5T760-820q0 33-23.5 56.5T680-740Z"/>
    </Icon>
  );
});

IconMaterialSurfing.displayName = 'OnesyIconMaterialSurfing';

export default IconMaterialSurfing;
