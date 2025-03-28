import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMusicCastW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MusicCastW100'

      short_name='MusicCast'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M571-212q-44.55 0-76.27-31.73Q463-275.45 463-320t31.73-76.27Q526.45-428 571-428q23 0 44 9t36 27v-342q0-12.75 8.74-21.38 8.75-8.62 21.67-8.62h121.66q12.93 0 21.43 8.62 8.5 8.63 8.5 21.38v24q0 12.75-8.62 21.37Q815.75-680 803-680H679v360q0 44.55-31.72 76.27Q615.55-212 571-212ZM278-614q-54 54-87 125t-36 152q0 7-4.02 12-4.03 5-9.98 5-7 0-10.5-5.5T127-338q4-87 39-163t92-133q57-57 132.5-91.5T553-764q7 0 12.5 3.5t5.5 10q0 6.5-5 10.5t-12 4q-81 3-151.5 35.5T278-614Zm118 119q-31 31-50 71.5T324-336q-1.05 6.97-5.08 11.49-4.02 4.51-9.97 4.51-5.95 0-9.95-5-4-5-4-11 3-53 24.5-98.5T376-515q35-35 80.5-56.5T555-596q6 0 11 3.93t5 10q0 6.07-4.51 10.05-4.52 3.98-11.49 5.02-47 3-87.5 22T396-495Z"/>
    </Icon>
  );
});

IconMaterialMusicCastW100.displayName = 'OnesyIconMaterialMusicCastW100';

export default IconMaterialMusicCastW100;
