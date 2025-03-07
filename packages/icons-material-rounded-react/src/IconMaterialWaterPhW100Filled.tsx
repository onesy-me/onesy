import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWaterPhW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterPhW100Filled'

      short_name='WaterPh'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M602-208H490v62q0 6.07-3.95 10.03-3.96 3.97-10 3.97-6.05 0-10.05-3.97-4-3.96-4-10.03v-172q0-9 7-15.5t16-6.5h117q11 0 19.5 8.75T630-310v74q0 11.67-8.17 19.83Q613.67-208 602-208Zm132-24v86q0 6.07-3.95 10.03-3.96 3.97-10 3.97-6.05 0-10.05-3.97-4-3.96-4-10.03v-180q0-6.07 3.95-10.03 3.96-3.97 10-3.97 6.05 0 10.05 3.97 4 3.96 4 10.03v66h112v-66q0-6.07 3.95-10.03 3.96-3.97 10-3.97 6.05 0 10.05 3.97 4 3.96 4 10.03v180q0 6.07-3.95 10.03-3.96 3.97-10 3.97-6.05 0-10.05-3.97-4-3.96-4-10.03v-86H734Zm-244-4h112v-74H490v74Zm-90-565q5 0 10 2t10 6q111 104 170 186t73 152q3 14-6.5 24.5T633-420H442q-24.75 0-42.37 17.62Q382-384.75 382-360v191q0 14-9.2 23t-22.8 9q-104 0-161-79.5T132-408q0-77 63-175t184-210q5-4 10.5-6t10.5-2Z"/>
    </Icon>
  );
});

IconMaterialWaterPhW100Filled.displayName = 'OnesyIconMaterialWaterPhW100Filled';

export default IconMaterialWaterPhW100Filled;
