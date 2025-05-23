import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialYoutubeSearchedForFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='YoutubeSearchedForFilled'

      short_name='YoutubeSearchedFor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-320q-24 0-46.5-4T350-336q-16-6-22-22t2-32q8-15 23-19.5t32 .5q13 5 27 7t28 2q75 0 127.5-52.5T620-580q0-75-52.5-127.5T440-760q-69 0-119.5 46.5T262-598l22-22q11-11 28-11t28 11q11 11 11 28t-11 28l-92 92q-12 12-28 12t-28-12l-92-92q-11-11-11-28t12-29q11-11 27-11t28 11l26 25q6-103 80-173.5T440-840q109 0 184.5 75.5T700-580q0 42-13 82t-39 70l202 202q11 11 11 28t-11 28q-11 11-28 11t-28-11L592-372q-32 26-71 39t-81 13Z"/>
    </Icon>
  );
});

IconMaterialYoutubeSearchedForFilled.displayName = 'OnesyIconMaterialYoutubeSearchedForFilled';

export default IconMaterialYoutubeSearchedForFilled;
