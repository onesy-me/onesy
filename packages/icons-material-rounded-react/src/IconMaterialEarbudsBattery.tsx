import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEarbudsBattery = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EarbudsBattery'

      short_name='EarbudsBattery'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-680v-20q0-8 6-14t14-6h40q8 0 14 6t6 14v20h40q17 0 28.5 11.5T880-640v360q0 17-11.5 28.5T840-240H680q-17 0-28.5-11.5T640-280v-360q0-17 11.5-28.5T680-680h40Zm0 360h80-80Zm-505 80q-57 0-96-39t-39-96v-265q0-33 23.5-56.5T160-720q33 0 56.5 23.5T240-640q0 33-23.5 56.5T160-560q-5 0-10-1t-10-3v189q0 32 21.5 53.5T215-300q32 0 53.5-21.5T290-375v-210q0-57 39-96t96-39q57 0 96 39t39 96v265q0 33-23.5 56.5T480-240q-33 0-56.5-23.5T400-320q0-33 23.5-56.5T480-400q5 0 10 1t10 3v-189q0-32-21.5-53.5T425-660q-32 0-53.5 21.5T350-585v210q0 57-39 96t-96 39Zm505-80h80v-280h-80v280Z"/>
    </Icon>
  );
});

IconMaterialEarbudsBattery.displayName = 'OnesyIconMaterialEarbudsBattery';

export default IconMaterialEarbudsBattery;
