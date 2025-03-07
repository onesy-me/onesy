import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialYoutubeActivityFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='YoutubeActivityFilled'

      short_name='YoutubeActivity'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M168-257q-26-7-45-26t-26-45q-6-23-9.5-56T82-447q-2-36-2-73t2-73q2-30 5.5-63t9.5-56q7-26 26-45t45-26q23-6 74.5-9.5T347-798q62-2 133-2t133 2q53 2 104.5 5.5T792-783q26 7 45 26t26 45q9 34 12.5 74.5T880-557q0 20-16 32t-36 7q-7-1-13.5-1.5T800-520q-83 0-141.5 58.5T600-320q0 8 .5 15.5T603-289q3 18-8 33t-28 15q-18 0-34 .5t-28 .5h-25q-71 0-133-2-53-2-104.5-5.5T168-257Zm262-160 148-86q10-6 10-17t-10-17l-148-86q-10-6-20 .5T400-605v170q0 11 10 17.5t20 .5Zm330 137h-40q-17 0-28.5-11.5T680-320q0-17 11.5-28.5T720-360h40v-40q0-17 11.5-28.5T800-440q17 0 28.5 11.5T840-400v40h40q17 0 28.5 11.5T920-320q0 17-11.5 28.5T880-280h-40v40q0 17-11.5 28.5T800-200q-17 0-28.5-11.5T760-240v-40Z"/>
    </Icon>
  );
});

IconMaterialYoutubeActivityFilled.displayName = 'OnesyIconMaterialYoutubeActivityFilled';

export default IconMaterialYoutubeActivityFilled;
