import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestMultiRoomW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestMultiRoomW100Filled'

      short_name='NestMultiRoom'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M242-172q-12.75 0-21.37-8.63Q212-189.25 212-202v-113q0-12.75 8.63-21.38Q229.25-345 242-345h274q12.75 0 21.38 8.62Q546-327.75 546-315v113q0 12.75-8.62 21.37Q528.75-172 516-172H242Zm362 0q-12.75 0-21.37-8.63Q574-189.25 574-202v-113q0-12 9-21t21-9h114q12.75 0 21.38 8.62Q748-327.75 748-315v113q0 12.75-8.62 21.37Q730.75-172 718-172H604ZM242-373q-12.75 0-21.37-8.63Q212-390.25 212-403v-113q0-12.75 8.63-21.38Q229.25-546 242-546h114q12.75 0 21.38 8.62Q386-528.75 386-516v113q0 12.75-8.62 21.37Q368.75-373 356-373H242Zm202 0q-12.75 0-21.37-8.63Q414-390.25 414-403v-113q0-12.75 8.63-21.38Q431.25-546 444-546h274q12.75 0 21.38 8.62Q748-528.75 748-516v113q0 12.75-8.62 21.37Q730.75-373 718-373H444ZM257-574q-11 0-14-10t5-17l196-148q8.3-6 17.34-9 9.05-3 18.86-3 9.8 0 18.71 3 8.92 3 17.09 9l196 148q8 7 5 17t-14 10H257Z"/>
    </Icon>
  );
});

IconMaterialNestMultiRoomW100Filled.displayName = 'OnesyIconMaterialNestMultiRoomW100Filled';

export default IconMaterialNestMultiRoomW100Filled;
