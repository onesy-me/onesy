import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCleanHandsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CleanHandsFilled'

      short_name='CleanHands'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m535-87-255-72v-361h64q7 0 14 1.5t14 3.5l277 103q14 5 22.5 18t8.5 27q0 21-14.5 34T632-320H527q-5 0-7.5-.5T513-323l-45-17q-8-3-16 1t-10 11q-2 8 1 15t11 10l59 21q2 1 6 1.5t7 .5h274q32 0 56 23t24 57L585-89q-10 4-24.5 4.5T535-87ZM40-160v-280q0-33 23.5-56.5T120-520q33 0 56.5 23.5T200-440v280q0 33-23.5 56.5T120-80q-33 0-56.5-23.5T40-160Zm560-334-214-81q-7-2-14-3.5t-15-1.5H210q17-51 56.5-88t93.5-48v-84h-20q-17 0-28.5-11.5T300-840q0-17 11.5-28.5T340-880h180q26 0 62.5 10.5T639-839q5 5 8.5 12.5T651-811q0 17-11.5 29T611-770q-8 0-15-3.5t-14-8.5q-13-9-29-13.5t-33-4.5h-80v84q69 14 114.5 68.5T600-520v26Zm160-66q-33 0-56.5-23.5T680-640q0-21 14-50.5t51-86.5q2-2 15-8 3 0 15 8 36 56 50.5 86t14.5 51q0 33-23.5 56.5T760-560Z"/>
    </Icon>
  );
});

IconMaterialCleanHandsFilled.displayName = 'OnesyIconMaterialCleanHandsFilled';

export default IconMaterialCleanHandsFilled;
