import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPillOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PillOffW100Filled'

      short_name='PillOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M788-615q0 35-13.5 66.5T737-492l-59 58q-9 9-21 9t-21-9L434-636q-9-9-9-21t9-21l58-59q25-24 56.5-37.5T615-788q72 0 122.5 50.5T788-615ZM580-336 468-223q-24 24-56 37.5T345-172q-72 0-122.5-50.5T172-345q0-35 13.5-67t37.5-56l113-112-194-194q-4-4-4.5-9.5T142-794q5-5 10-5t10 5l636 636q4 4 4.5 9.5T798-138q-5 5-10 5t-10-5L580-336Z"/>
    </Icon>
  );
});

IconMaterialPillOffW100Filled.displayName = 'OnesyIconMaterialPillOffW100Filled';

export default IconMaterialPillOffW100Filled;
