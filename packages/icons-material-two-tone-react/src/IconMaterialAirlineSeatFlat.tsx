import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAirlineSeatFlat = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatFlat'

      short_name='AirlineSeatFlat'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M5 11c.27 0 .52-.11.71-.3.39-.4.39-1.02-.01-1.41C5.51 9.11 5.26 9 5 9c-.27 0-.52.11-.71.3-.39.4-.39 1.02.01 1.41.19.18.44.29.7.29zm13-2h-7v2h9c0-1.1-.9-2-2-2z" opacity=".3"/><path d="M5 13c.78 0 1.55-.3 2.14-.9 1.16-1.19 1.14-3.08-.04-4.24C6.51 7.29 5.75 7 5 7c-.78 0-1.55.3-2.14.9-1.16 1.19-1.14 3.08.04 4.24.59.57 1.35.86 2.1.86zm-.71-3.7c.19-.19.44-.3.71-.3.26 0 .51.1.7.28.4.39.4 1.01.02 1.41-.2.2-.45.31-.72.31-.26 0-.51-.1-.7-.28-.4-.4-.4-1.02-.01-1.42zM18 7H9v6h13v-2c0-2.21-1.79-4-4-4zm-7 4V9h7c1.1 0 2 .9 2 2h-9zm-9 5h6v2h8v-2h6v-2H2z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatFlat.displayName = 'OnesyIconMaterialAirlineSeatFlat';

export default IconMaterialAirlineSeatFlat;
