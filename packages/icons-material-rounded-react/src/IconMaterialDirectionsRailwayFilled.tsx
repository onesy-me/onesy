import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDirectionsRailwayFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsRailwayFilled'

      short_name='DirectionsRailway'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M208-80q-14 0-19-12t5-22l46-46h480l46 46q10 10 5 22t-19 12H208Zm72-120 40-40h-20q-58 0-99-41t-41-99v-260q0-129 92.5-204.5T480-920q135 0 227.5 75.5T800-640v260q0 58-41 99t-99 41h-20l40 40H280Zm200-160q25 0 42.5-17.5T540-420q0-25-17.5-42.5T480-480q-25 0-42.5 17.5T420-420q0 25 17.5 42.5T480-360ZM240-600h480v-40q0-23-4.5-42.5T703-720H257q-8 18-12.5 37.5T240-640v40Z"/>
    </Icon>
  );
});

IconMaterialDirectionsRailwayFilled.displayName = 'OnesyIconMaterialDirectionsRailwayFilled';

export default IconMaterialDirectionsRailwayFilled;
