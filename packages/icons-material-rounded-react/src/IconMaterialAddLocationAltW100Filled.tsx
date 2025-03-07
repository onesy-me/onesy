import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddLocationAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddLocationAltW100Filled'

      short_name='AddLocationAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.18-494q24.82 0 42.32-17.68 17.5-17.67 17.5-42.5 0-24.82-17.68-42.32-17.67-17.5-42.5-17.5-24.82 0-42.32 17.68-17.5 17.67-17.5 42.5 0 24.82 17.68 42.32 17.67 17.5 42.5 17.5ZM480-828q11 0 20.5.5T520-825v51q0 38.78 27.61 66.39T614-680h26v26q0 38.78 27.61 66.39T734-560h19v13q0 56-26.5 113.5T662-324q-38 52-79.5 95T512-159q-6.64 6-15.09 9-8.46 3-16.91 3-8 0-16-2.5t-15-8.5q-36-33-78-78.5T292.5-333q-36.5-51-61-106T207-547q0-120 78.5-200.5T480-828Zm240 68H614q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h106v-106q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v106h106q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H748v106q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-106Z"/>
    </Icon>
  );
});

IconMaterialAddLocationAltW100Filled.displayName = 'OnesyIconMaterialAddLocationAltW100Filled';

export default IconMaterialAddLocationAltW100Filled;
