import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHouseboatFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HouseboatFilled'

      short_name='Houseboat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-240q-38 0-56 20t-77 20q-57 0-77-20t-56-20q-28 0-45 13.5T120-205q-16 4-28-7t-12-28q0-17 12-29.5t27-20.5q17-9 36-19.5t58-10.5q58 0 78 20t55 20q38 0 56.5-20t77.5-20q59 0 77.5 20t56.5 20q35 0 55-20t78-20q39 0 58 10.5t36 19.5q15 8 27 20.5t12 29.5q0 17-12 28t-28 7q-32-8-49-21.5T746-240q-36 0-56 20t-77 20q-59 0-77-20t-56-20ZM230-360q-24 0-46-9t-39-26l-27-27q-11-11-11.5-27.5T118-478q11-11 27.5-11.5T174-479l27 27q6 6 13.5 9t15.5 3h50v-135l-21 16q-14 10-29.5 7.5T204-568q-10-14-8-29.5t16-25.5l221-162q11-8 22.5-12t24.5-4q13 0 24.5 4t22.5 12l221 162q14 10 16.5 25.5T757-568q-10 14-26.5 16.5T700-559l-20-15v134h50q8 0 15.5-3t13.5-9l27-27q11-11 27.5-11t28.5 12q11 11 11 28t-11 28l-27 27q-17 17-39 26t-46 9H230Zm290-80v-40q0-17-11.5-28.5T480-520q-17 0-28.5 11.5T440-480v40h80Z"/>
    </Icon>
  );
});

IconMaterialHouseboatFilled.displayName = 'OnesyIconMaterialHouseboatFilled';

export default IconMaterialHouseboatFilled;
