import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDonutSmallW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DonutSmallW100Filled'

      short_name='DonutSmall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M579-516q-9-22-25.5-38T515-577.86V-826q124.71 12.05 212.35 98.52Q815-641 827-516H579ZM447-134q-134-14-224-112.5t-90-233.62q0-135.12 90-234.5T447-826v247.66q-32 11.34-51 38.53-19 27.2-19 60Q377-447 396.5-421t50.5 37.35V-134Zm68 0v-249.82q22.7-7.86 38.85-24.02Q570-424 579-446h248q-12.2 124.63-99.79 212.21Q639.63-146.2 515-134Z"/>
    </Icon>
  );
});

IconMaterialDonutSmallW100Filled.displayName = 'OnesyIconMaterialDonutSmallW100Filled';

export default IconMaterialDonutSmallW100Filled;
