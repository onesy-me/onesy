import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDatabaseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DatabaseW100'

      short_name='Database'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-172q-137 0-222.5-32.5T172-290v-390q0-45 90-76.5T480-788q128 0 218 31.5t90 76.5v390q0 53-85.5 85.5T480-172Zm0-434q85 0 171.5-23.5T757-681q-18-30-103.5-54.5T480-760q-86 0-173.5 23.5T201-685q17 30 103.5 54.5T480-606Zm0 202q41 0 81-4t76.5-12q36.5-8 67.5-20t55-27v-177q-24 15-55 27t-67.5 20q-36.5 8-76.5 12t-81 4q-43 0-83.5-4.5T320-598q-36-8-66.5-19.5T200-644v177q23 15 53.5 26.5T320-421q36 8 76.5 12.5T480-404Zm0 204q53 0 99-5.5t82-16q36-10.5 61.5-25.5t37.5-33v-159q-24 15-55 27t-67.5 20q-36.5 8-76.5 12t-81 4q-43 0-83.5-4.5T320-393q-36-8-66.5-19.5T200-439v159q12 19 37.5 33.5t61.5 25q36 10.5 82 16t99 5.5Z"/>
    </Icon>
  );
});

IconMaterialDatabaseW100.displayName = 'OnesyIconMaterialDatabaseW100';

export default IconMaterialDatabaseW100;
