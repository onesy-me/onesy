import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocationOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationOffW100Filled'

      short_name='LocationOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-147q-8 0-16-2.5t-15-8.55q-36-33.33-78-78.64T292.5-333q-36.5-51-61-105.78T207-546.82q0-37.18 8.5-70.68Q224-651 239-681L99-821q-4-4-4-9t4-10q4-5 10-5t11 5L862-98q4 4 4.5 9.5T862-78q-5 5-10 5t-10-5L632-288q-24 29-53 60.33t-67 68.54q-7 6.13-15.5 9.13-8.5 3-16.5 3Zm216-229L537-535q2-5 2.5-9.5t.5-9.5q0-25-17.5-42.5T480-614q-5 0-9.5.5T461-611L306-766q35-29 79-45.5t95-16.5q116 0 194.5 80.5T753-547q0 38-14 81t-43 90Z"/>
    </Icon>
  );
});

IconMaterialLocationOffW100Filled.displayName = 'OnesyIconMaterialLocationOffW100Filled';

export default IconMaterialLocationOffW100Filled;
