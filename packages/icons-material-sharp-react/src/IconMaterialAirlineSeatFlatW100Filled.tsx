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
      <path d="M388-452v-176h412v176H388ZM160-344v-28h640v28H160Zm74-108q-32 0-53-21t-21-53q0-32 21-53t53-21q32 0 53 21t21 53q0 32-21 53t-53 21Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatFlatW100Filled.displayName = 'OnesyIconMaterialAirlineSeatFlatW100Filled';

export default IconMaterialAirlineSeatFlatW100Filled;
