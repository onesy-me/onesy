import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialListAltAddW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ListAltAddW100'

      short_name='ListAltAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M702-186H582v-28h120v-120h28v120h120v28H730v120h-28v-120Zm-502-14v-560 560Zm-28 28v-616h616v387q-7-2-13.5-4t-14.5-4v-351H200v560h302q0 7.35.46 14.35T504-172H172Zm154.07-132q11.93 0 19.93-8.07t8-20q0-11.93-8.07-19.93t-20-8Q314-360 306-351.93t-8 20q0 11.93 8.07 19.93t20 8Zm0-148q11.93 0 19.93-8.07t8-20q0-11.93-8.07-19.93t-20-8Q314-508 306-499.93t-8 20q0 11.93 8.07 19.93t20 8Zm0-148q11.93 0 19.93-8.07t8-20q0-11.93-8.07-19.93t-20-8Q314-656 306-647.93t-8 20q0 11.93 8.07 19.93t20 8ZM450-466h208v-28H450v28Zm0-148h208v-28H450v28Zm0 296h88q5-8 10.5-14.5T560-346H450v28Z"/>
    </Icon>
  );
});

IconMaterialListAltAddW100.displayName = 'OnesyIconMaterialListAltAddW100';

export default IconMaterialListAltAddW100;
