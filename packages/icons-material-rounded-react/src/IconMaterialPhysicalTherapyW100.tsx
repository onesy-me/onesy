import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhysicalTherapyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhysicalTherapyW100'

      short_name='PhysicalTherapy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M476-327Zm79.59 140.76L410-244H202q-12.75 0-21.37-8.63Q172-261.25 172-274v-78q0-62 43-105t105-43h429q16.29 0 27.64 10.98Q788-478.04 788-462q0 14-8 24t-21 14l-121 32v150q0 15.91-7.06 28.79Q623.89-200.33 612-192q-12.15 8.25-26.57 10.12-14.43 1.88-29.84-4.36ZM488.04-364H365q-14 0-23 9t-11 20q-2 11 3 22.5t19 16.5l213 84q16 6 30-3.5t14-26.5v-122H488.04ZM200-272h141q-17-9-28-24.16T302-329q0-25.86 18.57-44.43T365-392h157l230-59q5-2 7-5t1-7q-1-4-3.5-6.5T749-472H320q-50 0-85 35t-35 85v80Zm276-55Zm-76-233q-44.55 0-76.27-31.72Q292-623.45 292-668t31.73-76.28Q355.45-776 400-776t76.27 31.72Q508-712.55 508-668t-31.73 76.28Q444.55-560 400-560Zm0-28q33 0 56.5-23.5T480-668q0-33-23.5-56.5T400-748q-33 0-56.5 23.5T320-668q0 33 23.5 56.5T400-588Zm0-80Z"/>
    </Icon>
  );
});

IconMaterialPhysicalTherapyW100.displayName = 'OnesyIconMaterialPhysicalTherapyW100';

export default IconMaterialPhysicalTherapyW100;
