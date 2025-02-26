import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStadiumFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StadiumFilled'

      short_name='Stadium'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-712v-96q0-11 9.5-17t19.5-1l95 48q11 5 11 18t-11 18l-95 48q-10 5-19.5-1t-9.5-17Zm600 0v-96q0-11 9.5-17t19.5-1l95 48q11 5 11 18t-11 18l-95 48q-10 5-19.5-1t-9.5-17Zm-280-40v-96q0-11 9.5-17t19.5-1l95 48q11 5 11 18t-11 18l-95 48q-10 5-19.5-1t-9.5-17ZM336-88q-98-11-177-39.5T80-200v-360q0-25 31.5-46.5t85.5-38q54-16.5 127-26t156-9.5q83 0 156 9.5t127 26q54 16.5 85.5 38T880-560v360q0 45-79.5 73.5T623-87q-9 1-16-5.5t-7-15.5v-52q0-50-35-85t-85-35q-50 0-85 35t-35 85v51q0 10-7 16t-17 5Zm144-432q97 0 167.5-11.5T760-558q0-5-76-23.5T480-600q-128 0-204 18.5T200-558q42 15 112.5 26.5T480-520Z"/>
    </Icon>
  );
});

IconMaterialStadiumFilled.displayName = 'OnesyIconMaterialStadiumFilled';

export default IconMaterialStadiumFilled;
