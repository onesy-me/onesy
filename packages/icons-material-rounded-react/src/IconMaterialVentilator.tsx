import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVentilator = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Ventilator'

      short_name='Ventilator'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-680h160v-80H520v80ZM160-280q17 0 28.5-11.5T200-320q0-17-11.5-28.5T160-360q-17 0-28.5 11.5T120-320q0 17 11.5 28.5T160-280Zm320 160q-76 0-144-24t-125-67q-11 5-24 8t-27 3q-50 0-85-35t-35-85q0-23 8-43t22-36q-7-18-12.5-37T48-475q-3-17 7-30t27-15q17-2 29.5 8.5T128-484q2 11 5.5 22.5T141-439q5-1 9.5-1h9.5q50 0 85 35t35 85q0 14-3 26.5t-8 24.5q37 27 80 44.5t91 22.5v-198q0-17-11.5-28.5T400-440q-66 0-113-47t-47-113q0-66 47-113t113-47h40q0-33 23.5-56.5T520-840h160q33 0 56.5 23.5T760-760h40q17 0 28.5 11.5T840-720q0 17-11.5 28.5T800-680h-40q0 33-23.5 56.5T680-600H520q-33 0-56.5-23.5T440-680h-40q-33 0-56.5 23.5T320-600q0 33 23.5 56.5T400-520q50 0 85 35t35 85v198q87-10 158-57t113-120l-13-7q-7-4-12.5-10t-8-13.5q-2.5-7.5-2-15.5t4.5-15q4-8 10-13t13-7q7-2 15-1.5t15 4.5l11 5 4-16 4-16q4-17 16.5-27.5T878-520q17 2 27 15t7 30q-3 15-7 30t-9 29l6 3q8 4 13 10t7.5 13.5q2.5 7.5 2 15T920-359q-4 7-10 12t-13 7.5q-7 2.5-14.5 2T867-342l-3-1q-57 101-159 162t-225 61Zm40-560v-80 80ZM160-320Z"/>
    </Icon>
  );
});

IconMaterialVentilator.displayName = 'OnesyIconMaterialVentilator';

export default IconMaterialVentilator;
