import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAirportShuttleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirportShuttleW100'

      short_name='AirportShuttle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M259-294q-32.5 0-55.25-22.75T181-372h-16q-24.75 0-42.37-17.63Q105-407.25 105-432v-215.59q0-25.41 17.63-42.91Q140.25-708 165-708h457q11.43 0 21.79 4.17Q654.14-699.65 662-692l174 160q9 8 14 19.6 5 11.6 5 24.4v56q0 24.75-17.62 42.37Q819.75-372 795-372q0 32.5-22.75 55.25T717-294q-32.5 0-55.25-22.75T639-372H337q0 32-22.75 55T259-294Zm302-236h236L644-671q-5-4-10.5-6.5T622-680h-61v150Zm-214 0h186v-150H347v150Zm-214 0h186v-150H165q-14 0-23 9t-9 23v118Zm126 208q21 0 35.5-14.5T309-372q0-21-14.5-35.5T259-422q-21 0-35.5 14.5T209-372q0 21 14.5 35.5T259-322Zm458 0q21 0 35.5-14.5T767-372q0-21-14.5-35.5T717-422q-21 0-35.5 14.5T667-372q0 21 14.5 35.5T717-322Zm-384-78h310q6-18 26.5-34t47.5-16q27 0 46 14.5t28 35.5h4q14 0 23-9t9-23v-70H133v70q0 14 9 23t23 9h20q6-18 26.5-34t47.5-16q27 0 46 14.5t28 35.5Zm494-102H133h694Z"/>
    </Icon>
  );
});

IconMaterialAirportShuttleW100.displayName = 'OnesyIconMaterialAirportShuttleW100';

export default IconMaterialAirportShuttleW100;
