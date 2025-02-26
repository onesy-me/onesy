import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWaterBottle = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterBottle'

      short_name='WaterBottle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M607-520H393q-5 12-12 23.5T364-477l29 317h214l29-317q-10-9-17-20t-12-23ZM382-680l-11 44q7 8 12.5 17t9.5 19h214q4-10 9.5-19t12.5-17l-11-44H382Zm11 600q-31 0-54-20.5T313-152l-31-346q-1-10 3.5-18.5T299-530q8-5 14-12t6-17q0-9-4-16.5T303-588q-10-5-15-15.5t-2-21.5l26-105q3-14 14-22t25-8h109v-40h-20q-17 0-28.5-11.5T400-840q0-17 11.5-28.5T440-880h120q17 0 28.5 11.5T600-840q0 17-11.5 28.5T560-800h-20v40h109q14 0 24.5 8t13.5 22l27 105q3 11-2 21.5T697-588q-8 4-12.5 11t-4.5 16q0 11 5.5 18.5T700-530q9 5 14 13.5t4 18.5l-31 345q-3 31-26 52t-54 21H393Zm107-440Zm0-80Z"/>
    </Icon>
  );
});

IconMaterialWaterBottle.displayName = 'OnesyIconMaterialWaterBottle';

export default IconMaterialWaterBottle;
