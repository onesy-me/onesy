import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAirlineSeatFlatW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatFlatW100Filled'

      short_name='AirlineSeatFlat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M418-452q-12.75 0-21.37-8.63Q388-469.25 388-482v-116q0-13 8.5-21.5T418-628h274q44.55 0 76.28 31.72Q800-564.55 800-520v38q0 12.75-8.62 21.37Q782.75-452 770-452H418Zm368 108H174q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h612q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4ZM234-452q-32 0-53-21t-21-53q0-32 21-53t53-21q32 0 53 21t21 53q0 32-21 53t-53 21Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatFlatW100Filled.displayName = 'OnesyIconMaterialAirlineSeatFlatW100Filled';

export default IconMaterialAirlineSeatFlatW100Filled;
