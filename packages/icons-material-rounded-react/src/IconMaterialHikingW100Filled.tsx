import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHikingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HikingW100Filled'

      short_name='Hiking'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M396-397 326-78q-2 5-6.24 8.5Q315.53-66 310-66q-7.73 0-12.36-5.5Q293-77 295-84l113-583q3-17 16.89-27T454-704q16.16 0 29.86 7 13.71 7 22.14 21l40 64q20 32 61 61.5t99 46.5v-66q0-6.07 3.95-10.03 3.96-3.97 10-3.97 6.05 0 10.05 3.97 4 3.96 4 10.03v490q0 6.07-3.95 10.03-3.96 3.97-10 3.97Q714-66 710-69.97q-4-3.96-4-10.03v-397q-54-11-105.5-43.5T505-607l-37 186 77 73q5 5 7 10.54 2 5.55 2 11.46v246q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-221l-130-96Zm-138-75-29-5q-6-2-10-6.5t-2-10.5l30-157q5-23 23.5-35.5T311-694q8 2 13 9.5t3 15.5l-34 174q-2.3 12.14-12.65 18.57Q270-470 258-472Zm262-284q-26.4 0-45.2-18.8Q456-793.6 456-820q0-26.4 18.8-45.2Q493.6-884 520-884q26.4 0 45.2 18.8Q584-846.4 584-820q0 26.4-18.8 45.2Q546.4-756 520-756Z"/>
    </Icon>
  );
});

IconMaterialHikingW100Filled.displayName = 'OnesyIconMaterialHikingW100Filled';

export default IconMaterialHikingW100Filled;
