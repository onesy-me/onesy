import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUmbrella = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Umbrella'

      short_name='Umbrella'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-12 0-22.5-6.5T442-107L240-717l140 34 60-46v-95q0-40 29-68t71-28q42 0 71 28t29 68v24h-80v-24q0-8-6-13.5t-14-5.5q-8 0-14 5.5t-6 13.5v95l60 46 140-34-202 609q-5 14-15.5 21T480-80Zm40-288 78-238-36 9-42-31v260Zm-80 0v-260l-42 32-37-10 79 238Z"/>
    </Icon>
  );
});

IconMaterialUmbrella.displayName = 'OnesyIconMaterialUmbrella';

export default IconMaterialUmbrella;
