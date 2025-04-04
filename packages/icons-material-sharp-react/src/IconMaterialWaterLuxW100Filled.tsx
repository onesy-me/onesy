import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWaterLuxW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterLuxW100Filled'

      short_name='WaterLux'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M156-760v-28h105v28H156Zm83 208-20-19 74-74 20 19-74 74Zm241-87q-63 0-106.5-43.5T330-789h300q0 63-43.5 106.5T480-639Zm-14 169v-105h28v105h-28Zm257-81-75-75 19-19 76 74-20 20Zm-24-209v-28h105v28H699ZM106-160v-30q29-5 46-20.5t62-15.5q48 0 69.5 20t63.5 20q42 0 63.5-20t69.5-20q48 0 69.5 20t63.5 20q42 0 63.5-20t69.5-20q45 0 62 15.5t46 20.5v30q-30-6-51.5-22T746-198q-41 0-63 20t-70 20q-48 0-69.5-20T480-198q-42 0-63.5 20T347-158q-48 0-70-20t-63-20q-36 0-56 16t-52 22Zm0-148v-30q29-5 46-20.5t62-15.5q48 0 69.5 20t63.5 20q42 0 63.5-20t69.5-20q48 0 69.5 20t63.5 20q42 0 63.5-20t69.5-20q45 0 62 15.5t46 20.5v30q-30-6-51.5-22T746-346q-41 0-63 20t-70 20q-48 0-69.5-20T480-346q-42 0-63.5 20T347-306q-48 0-70-20t-63-20q-36 0-56 16t-52 22Z"/>
    </Icon>
  );
});

IconMaterialWaterLuxW100Filled.displayName = 'OnesyIconMaterialWaterLuxW100Filled';

export default IconMaterialWaterLuxW100Filled;
