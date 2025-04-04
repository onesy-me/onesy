import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCleanHands = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CleanHands'

      short_name='CleanHands'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m558-144 238-74q-5-9-14.5-15.5T760-240H558q-27 0-43-2t-33-8l-57-19q-16-5-23-20t-2-31q5-16 19.5-23.5T450-346l42 14q17 5 38.5 8t58.5 4h11q0-11-6.5-21T578-354l-234-86h-64v220l278 76Zm-21 78-257-72q-8 26-31.5 42T200-80h-80q-33 0-56.5-23.5T40-160v-280q0-33 23.5-56.5T120-520h224q7 0 14 1.5t13 3.5l235 87q33 12 53.5 42t20.5 66h80q50 0 85 33t35 87q0 22-11.5 34.5T833-145L583-67q-11 4-23 4t-23-3Zm-417-94h80v-280h-80v280Zm480-334-80-30q-2-48-36.5-82T400-640q-33 0-60.5 16.5T296-580h-86q17-51 56.5-88t93.5-48v-84h-20q-17 0-28.5-11.5T300-840q0-17 11.5-28.5T340-880h180q26 0 62.5 10.5T639-839q5 5 8.5 12.5T651-811q0 17-11.5 29T611-770q-8 0-15-3.5t-14-8.5q-13-9-29-13.5t-33-4.5h-80v84q69 14 114.5 68.5T600-520v26Zm-200-86Zm360 20q-33 0-56.5-23.5T680-640q0-21 14-50.5t51-86.5q2-2 15-8 3 0 15 8 36 56 50.5 86t14.5 51q0 33-23.5 56.5T760-560Z"/>
    </Icon>
  );
});

IconMaterialCleanHands.displayName = 'OnesyIconMaterialCleanHands';

export default IconMaterialCleanHands;
