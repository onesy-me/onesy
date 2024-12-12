import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSportsFootballW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsFootballW100'

      short_name='SportsFootball'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-480Zm-82 274L206-398q-7 40-6.5 96.5T208-210q29 9 91 10.5t99-6.5Zm34-6q60-9 118-36.5t96-65.5q36-36 63.5-93T748-526L526-748q-57 9-114.5 37.5T319-647q-35 35-63.5 92.5T212-432l220 220Zm322-348q7-45 6.5-101t-8.5-89q-29-9-91-10.5t-99 6.5l192 194ZM319-172q-46 0-87-5.5T185-189q-5-6-9-43t-4-77q0-110 32.5-203T296-664q59-59 152.5-91.5T653-788q43 0 76.5 4.5T770-773q9 7 13.5 42.5T788-653q0 114-32 207.5T666-294q-58 58-150.5 90T319-172Zm67-234 168-168q4-4 9.5-4.5T574-574q5 5 5 10t-5 10L406-386q-4 4-9.5 4.5T386-386q-5-5-5-10t5-10Z"/>
    </Icon>
  );
});

IconMaterialSportsFootballW100.displayName = 'OnesyIconMaterialSportsFootballW100';

export default IconMaterialSportsFootballW100;
