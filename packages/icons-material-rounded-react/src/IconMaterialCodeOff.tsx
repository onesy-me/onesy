import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCodeOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CodeOff'

      short_name='CodeOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m193-479 155 155q11 11 11 28t-11 28q-11 11-28 11t-28-11L108-452q-6-6-8.5-13T97-480q0-8 2.5-15t8.5-13l115-115L83-763q-12-12-12-28.5T83-820q12-12 28.5-12t28.5 12l680 680q12 12 12 28t-12 28q-12 12-28.5 12T763-84L280-566l-87 87Zm516 113q-12-12-12-28.5t12-28.5l58-58-155-155q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13l-87 87q-12 12-28 11.5T709-366Z"/>
    </Icon>
  );
});

IconMaterialCodeOff.displayName = 'OnesyIconMaterialCodeOff';

export default IconMaterialCodeOff;
