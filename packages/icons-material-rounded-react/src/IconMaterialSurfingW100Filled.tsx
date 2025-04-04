import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSurfingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SurfingW100Filled'

      short_name='Surfing'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-66q-6 0-10-4t-4-10q0-6 4-10t10-4q28 0 55-8t53-22q5-3 12-3t12 3q26 14 53 22t55 8q28 0 55-8t53-22q5-3 12-3t12 3q26 14 53 22t55 8q28 0 55-8t53-22q5-3 12-3t12 3q26 14 53 22t55 8q6 0 10 4t4 10q0 6-4 10t-10 4q-28 0-58-8t-62-25q-32 17-62 25t-58 8q-28 0-58-8t-62-25q-32 17-62 25t-58 8q-28 0-58-8t-62-25q-32 17-62 25t-58 8Zm323-496 171 135v154q14 10 37.5 28.5T687-216q-10 8-33.5 15t-53.5 7q-30 0-61.5-10.5T480-241q-27 26-53.5 35T378-195q-100-60-166-129t-66-105q0-15 15.5-20t32.5-5q27 0 81 14t126 46l-49-166q-5-17-1-34.5t15-25.5l143-106q-5-1-27.5-5t-49-9.5-49-9.5q-22.5-4-27.5-5l-89 61q-5 3-10.5 2.5T248-697q-3-5-2-11t6-9l88-60q5-3 10.5-4.5t11.5-.5l200 37q8 2 16.5 7.5T592-722l35 62q24 42 65 71.5t91 38.5q6 2 10.5 6t4.5 10q0 6-5 10t-11 3q-61-10-111-48t-82-101L443-562Zm-41 23 27 156q35 17 74 40t83 49v-109L402-539Zm278-217q-26 0-45-19t-19-45q0-26 19-45t45-19q26 0 45 19t19 45q0 26-19 45t-45 19Z"/>
    </Icon>
  );
});

IconMaterialSurfingW100Filled.displayName = 'OnesyIconMaterialSurfingW100Filled';

export default IconMaterialSurfingW100Filled;
