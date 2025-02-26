import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddToDriveW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddToDriveW100'

      short_name='AddToDrive'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-152q-12.75 0-25.87-7.5-13.13-7.5-19.47-18.67l-79.32-139.66Q109-329 108.5-344q-.5-15 6.5-26l240-412q7-11 19.5-18.5T400-808h160q13 0 25.5 7.5T605-782l139 240q4 7 1 13t-11 7q-4 1-7.48-1-3.47-2-5.52-6L574-780H386L132-344l94 164h305q3.85 0 6.92 1.5Q541-177 543-173q4 7 0 14t-12 7H240Zm77-154q-5 0-10.5-2.5T299-316q-4-6.68-4-14.84t4-15.16l157-273q3.71-6.75 10.77-10.88Q473.83-634 482-634q5.97 0 11.13 3.03 5.16 3.02 7.87 7.97l89 155q2 4 1.48 8.41-.52 4.42-3.63 7.69-4.85 4.9-11.35 4.4T566-454l-86-150-155 270h181q7.24 0 11.62 4.5 4.38 4.5 2.58 11.41-1.2 5.09-5.31 8.59-4.1 3.5-8.89 3.5H317Zm429 40H640q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h106v-106q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v106h106q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H774v106q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-106Z"/>
    </Icon>
  );
});

IconMaterialAddToDriveW100.displayName = 'OnesyIconMaterialAddToDriveW100';

export default IconMaterialAddToDriveW100;
