import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHolidayVillageFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HolidayVillageFilled'

      short_name='HolidayVillage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-287q0-16 6-30.5t17-25.5l160-160q12-12 27-18t30-6q15 0 30 6t27 18l160 160q11 11 17 25.5t6 30.5v287q0 33-23.5 56.5T480-160H380q-8 0-14-6t-6-14v-140q0-17-11.5-28.5T320-360q-17 0-28.5 11.5T280-320v140q0 8-6 14t-14 6H160Zm480-40v-393L501-732q-19-19-9-43.5t37-24.5q8 0 16 3.5t13 8.5l139 139q11 11 17 25.5t6 30.5v393q0 17-11.5 28.5T680-160q-17 0-28.5-11.5T640-200Zm160 0v-459l-73-73q-19-19-9-43.5t37-24.5q8 0 16 3.5t13 8.5l73 73q11 11 17 25.5t6 30.5v459q0 17-11.5 28.5T840-160q-17 0-28.5-11.5T800-200ZM320-440q17 0 28.5-11.5T360-480q0-17-11.5-28.5T320-520q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440Z"/>
    </Icon>
  );
});

IconMaterialHolidayVillageFilled.displayName = 'OnesyIconMaterialHolidayVillageFilled';

export default IconMaterialHolidayVillageFilled;
