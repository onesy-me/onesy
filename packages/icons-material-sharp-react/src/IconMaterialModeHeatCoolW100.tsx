import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialModeHeatCoolW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeHeatCoolW100'

      short_name='ModeHeatCool'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M290-298q-58-21-94.5-72T159-487q0-47 16.5-86.5T216-646q24-33 52.5-58.5T321-748v29q0 42 29 71t71 29q15 0 29-5t26-13l12-8q21 18 36.5 40t24.5 48l-22 22q-6-21-16.5-39.5T485-609q-14 9-30.5 13.5T421-591q-45 0-80-28t-45-73q-46 41-77.5 92.5T187-487q0 53 27.5 95t72.5 62q-4-8-6-16.5t-2-18.5q0-16 6.5-30.5T303-421l57-57 55 55-20 20-35-35-37 37q-8 8-12 16.5t-4 19.5q0 11 4 19.5t11 15.5l-32 32Zm70-180Zm0 0ZM206-61l-20-20 653-653 20 20-206 206h206v28H624l-82 82 83 83h234v28H653l153 153-20 20-153-153v206h-28v-234l-83-83-83 83v234h-28v-206L206-61Z"/>
    </Icon>
  );
});

IconMaterialModeHeatCoolW100.displayName = 'OnesyIconMaterialModeHeatCoolW100';

export default IconMaterialModeHeatCoolW100;
