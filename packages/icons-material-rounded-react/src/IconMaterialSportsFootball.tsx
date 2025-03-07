import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSportsFootball = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsFootball'

      short_name='SportsFootball'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-480ZM362-202 202-362q-3 38-1.5 79t7.5 73q23 7 69.5 9t84.5-1Zm96-16q59-13 106-37t82-59q34-34 58-80.5T742-500L500-742q-57 14-103 38.5T316-644q-35 35-59.5 81.5T218-458l240 240Zm300-378q4-39 2.5-81t-8.5-73q-23-8-69.5-10t-84.5 2l160 162ZM310-120q-57 0-104-8.5T148-148q-11-12-19.5-60T120-314q0-119 36-220.5T258-702q66-66 169-102t223-36q58 0 104.5 8.5T812-812q11 12 19.5 60t8.5 108q0 117-36 218.5T702-258q-65 65-168 101.5T310-120Zm58-304 168-168q11-11 28-11t28 11q11 11 11 28t-11 28L424-368q-11 11-28 11t-28-11q-11-11-11-28t11-28Z"/>
    </Icon>
  );
});

IconMaterialSportsFootball.displayName = 'OnesyIconMaterialSportsFootball';

export default IconMaterialSportsFootball;
