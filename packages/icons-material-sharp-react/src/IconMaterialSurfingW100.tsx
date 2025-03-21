import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSurfingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SurfingW100'

      short_name='Surfing'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M106-66v-28h14q32 0 61.5-10t58.5-27q29 17 58.5 27T360-94q32 0 62-10t58-27q29 17 58.5 27T600-94q32 0 62-10t58-27q28 17 58 27t62 10h14v28h-14q-28 0-58-8t-62-25q-32 17-62 25t-58 8q-28 0-58-8t-62-25q-32 17-62 25t-58 8q-28 0-58-8t-62-25q-32 17-62 25t-58 8h-14Zm244-718 212 39q8 2 16.5 7.5T592-722l35 62q26 45 71.5 75.5T798-548v29q-66-7-120.5-45.5T589-670L443-562l171 135v154q14 10 37.5 28.5T687-216q-10 8-33.5 15t-53.5 7q-30 0-61.5-10.5T480-241q-27 26-53.5 35T378-195q-100-60-166-129t-66-105q0-15 15.5-20t32.5-5q27 0 81 14t126 46l-61-207 169-125q-5-1-27.5-5t-49-9.5-49-9.5q-22.5-4-27.5-5l-100 69-16-23 110-75Zm52 245 27 156q35 17 74 40t83 49v-109L402-539Zm278-217q-26 0-45-19t-19-45q0-26 19-45t45-19q26 0 45 19t19 45q0 26-19 45t-45 19Z"/>
    </Icon>
  );
});

IconMaterialSurfingW100.displayName = 'OnesyIconMaterialSurfingW100';

export default IconMaterialSurfingW100;
