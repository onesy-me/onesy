import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAirlineSeatFlatW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatFlatW100'

      short_name='AirlineSeatFlat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M418-452q-12.75 0-21.37-8.63Q388-469.25 388-482v-116q0-13 8.5-21.5T418-628h274q44.55 0 76.28 31.72Q800-564.55 800-520v38q0 12.75-8.62 21.37Q782.75-452 770-452H418Zm-2-148v120-120Zm370 256H174q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h612q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4ZM234-452q-32 0-53-21t-21-53q0-32 21-53t53-21q32 0 53 21t21 53q0 32-21 53t-53 21Zm0-28q19.55 0 32.77-13.23Q280-506.45 280-526q0-19.55-13.23-32.78Q253.55-572 234-572q-19.55 0-32.77 13.22Q188-545.55 188-526t13.23 32.77Q214.45-480 234-480Zm182 0h356v-40q0-33-23.5-56.5T692-600H416v120Zm-182-46Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatFlatW100.displayName = 'OnesyIconMaterialAirlineSeatFlatW100';

export default IconMaterialAirlineSeatFlatW100;
