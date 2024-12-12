import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCampingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CampingFilled'

      short_name='Camping'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-186l350-472-70-94 64-48 56 75 56-75 64 48-70 94 350 472v186H80Zm249-80h302L480-371 329-160Z"/>
    </Icon>
  );
});

IconMaterialCampingFilled.displayName = 'OnesyIconMaterialCampingFilled';

export default IconMaterialCampingFilled;
