import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRecenterFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RecenterFilled'

      short_name='Recenter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-207v127q0 17-11.5 28.5T480-40q-17 0-28.5-11.5T440-80v-127l-16 16q-11 11-27.5 11T368-192q-11-11-11-28t11-28l84-84q12-12 28-12t28 12l84 84q11 11 11.5 27.5T592-192q-11 11-27.5 11.5T536-191l-16-16ZM207-440H80q-17 0-28.5-11.5T40-480q0-17 11.5-28.5T80-520h127l-16-16q-11-11-11-27.5t12-28.5q11-11 28-11t28 11l84 84q12 12 12 28t-12 28l-84 84q-11 11-27.5 11.5T192-368q-11-11-11.5-27.5T191-424l16-16Zm546 0 16 16q11 11 11 27.5T768-368q-11 11-28 11t-28-11l-84-84q-12-12-12-28t12-28l84-84q11-11 27.5-11.5T768-592q11 11 11.5 27.5T769-536l-16 16h127q17 0 28.5 11.5T920-480q0 17-11.5 28.5T880-440H753Zm-273 20q-25 0-42.5-17.5T420-480q0-25 17.5-42.5T480-540q25 0 42.5 17.5T540-480q0 25-17.5 42.5T480-420Zm-40-333v-127q0-17 11.5-28.5T480-920q17 0 28.5 11.5T520-880v127l16-16q11-11 27.5-11t28.5 12q11 11 11 28t-11 28l-84 84q-12 12-28 12t-28-12l-84-84q-11-11-11.5-27.5T368-768q11-11 27.5-11.5T424-769l16 16Z"/>
    </Icon>
  );
});

IconMaterialRecenterFilled.displayName = 'OnesyIconMaterialRecenterFilled';

export default IconMaterialRecenterFilled;
