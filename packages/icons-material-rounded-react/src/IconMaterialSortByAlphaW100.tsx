import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSortByAlphaW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SortByAlphaW100'

      short_name='SortByAlpha'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m182-396-36 86q-2 4-5 6t-7.87 2q-8.13 0-12.13-6t-1-13l137-329q1.62-3.69 4.85-5.85 3.24-2.15 7.44-2.15H279q3.94 0 6.97 2t5.03 6l134 327q3 8-1.6 14.5t-12.6 6.5q-4.8 0-8.8-2.5-4-2.5-6-7.5l-32-84H182Zm10-26h160l-78-194h-4l-78 194Zm414 94h199q5.42 0 9.21 3.79Q818-320.42 818-315q0 5.42-3.79 9.21Q810.42-302 805-302H577q-2.92 0-4.96-1.92t-2.04-4.66V-319q0-4.55 1.5-8.77Q573-332 575-336l205-296H591q-5.42 0-9.21-3.79Q578-639.58 578-645q0-5.42 3.79-9.21Q585.58-658 591-658h218q2.92 0 4.96 1.92t2.04 4.66V-641q0 4.55-1.5 8.78Q813-628 811-624L606-328ZM402-770q-5.25 0-7.12-4.5-1.88-4.5 2.17-8.55l72.09-72.09Q474-860 480.18-860q6.18 0 10.82 5l71.96 71.96q4.04 4.04 2.17 8.54-1.88 4.5-7.13 4.5H402Zm67 665-71.96-71.96q-4.04-4.04-2.16-8.54 1.87-4.5 7.12-4.5h156q5.25 0 7.13 4.5 1.87 4.5-2.18 8.55l-72.09 72.09Q486-100 479.82-100q-6.18 0-10.82-5Z"/>
    </Icon>
  );
});

IconMaterialSortByAlphaW100.displayName = 'OnesyIconMaterialSortByAlphaW100';

export default IconMaterialSortByAlphaW100;
