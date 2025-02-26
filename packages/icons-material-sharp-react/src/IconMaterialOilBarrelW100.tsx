import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOilBarrelW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OilBarrelW100'

      short_name='OilBarrel'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M171-172v-28h65v-266h-65v-28h65v-266h-65v-28h617v28h-64v266h64v28h-64v266h64v28H171Zm93-28h432v-266h-40v-28h40v-266H264v266h40v28h-40v266Zm215.88-153q39.12 0 66.62-27.03 27.5-27.03 27.5-65.42 0-30.55-17.62-52.48Q538.75-519.86 480-588q-58 68-76 90.21-18 22.21-18 52.6Q386-407 413.38-380t66.5 27ZM264-200v-560 560Z"/>
    </Icon>
  );
});

IconMaterialOilBarrelW100.displayName = 'OnesyIconMaterialOilBarrelW100';

export default IconMaterialOilBarrelW100;
