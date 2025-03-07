import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoStrollerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoStrollerW100'

      short_name='NoStroller'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M290.44-166Q270-166 255-180.77q-15-14.76-15-35.5 0-20.73 14.77-35.23 14.76-14.5 35.5-14.5 20.73 0 35.23 14.56 14.5 14.56 14.5 35Q340-196 325.44-181q-14.56 15-35 15ZM612-461l-28-28v-145l-67 78-20-20 127-148q17-20 35.5-29t41.5-9q29 0 48.5 19.5t19.5 48.87V-680h-28v-14q0-17.04-11.48-28.52T701-734q-17 0-30.5 6.5T646-707l-34 40v206Zm14 127 28 28H267l160-187L90-830l20-20L872-88l-20 20-405-405-118 139h297Zm-51.56 168Q554-166 539-180.77q-15-14.76-15-35.5 0-20.73 14.77-35.23 14.76-14.5 35.5-14.5 20.73 0 35.23 14.56 14.5 14.56 14.5 35Q624-196 609.44-181q-14.56 15-35 15ZM447-473Zm70-83Zm-62-62-20-20 73-85q-20-6-39.5-8.5T428-734q-18 0-38 2.5t-40 8.5l-22-22q26-9 51.5-13t48.5-4q34 0 66 6t64 17L455-618Zm-20-20Z"/>
    </Icon>
  );
});

IconMaterialNoStrollerW100.displayName = 'OnesyIconMaterialNoStrollerW100';

export default IconMaterialNoStrollerW100;
