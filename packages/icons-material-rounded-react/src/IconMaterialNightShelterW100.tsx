import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNightShelterW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightShelterW100'

      short_name='NightShelter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-172q-24.75 0-42.37-17.63Q212-207.25 212-232v-312q0-14.25 6.38-27 6.37-12.75 17.62-21l208-157q15.68-12 35.84-12Q500-761 516-749l208 157q11.25 8.25 17.63 21 6.37 12.75 6.37 27v312q0 24.75-17.62 42.37Q712.75-172 688-172H272Zm0-28h416q14 0 23-9t9-23v-312q0-8-3.5-14.5T707-570L499-726q-8-7-19-7t-19 7L253-570q-6 5-9.5 11.5T240-544v312q0 14 9 23t23 9Zm208-267ZM352-316h256v32.5q0 6.5 4.5 11T624-268q7 0 11.5-4.5T640-284v-112q0-26.4-18.8-45.2Q602.4-460 576-460h-82q-12.75 0-21.37 8.62Q464-442.75 464-430v82H352v-128q0-7-4.5-11.5T336-492q-7 0-11.5 4.5T320-476v192q0 7 4.5 11.5T336-268q7 0 11.5-4.5t4.5-11V-316Zm56.14-48q16.86 0 28.36-11.64t11.5-28.5q0-16.86-11.64-28.36t-28.5-11.5q-16.86 0-28.36 11.64t-11.5 28.5q0 16.86 11.64 28.36t28.5 11.5Z"/>
    </Icon>
  );
});

IconMaterialNightShelterW100.displayName = 'OnesyIconMaterialNightShelterW100';

export default IconMaterialNightShelterW100;
