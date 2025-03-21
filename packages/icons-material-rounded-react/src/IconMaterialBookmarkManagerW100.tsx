import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBookmarkManagerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkManagerW100'

      short_name='BookmarkManager'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-240v-480 480Zm32 28q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h162q12 0 23.5 5t19.5 13l62 62h309q26 0 43 17t17 43v64q0 6-4 10t-10 4q-6 0-10-4t-4-10v-64q0-12-10-22t-22-10H448l-80-80H192q-14 0-23 9t-9 23v416q0 12 10 22t22 10h266q6 0 10 4t4 10q0 6-4 10t-10 4H192Zm380 50v-36q0-6 2-11t7-10l202-201q5-5 10-6.5t10-1.5q5 0 10.5 2t9.5 6l37 38q4 5 6 10t2 10q0 5-2 10t-6 10L659-141q-5 5-10 7t-11 2h-36q-13 0-21.5-8.5T572-162Zm268-200-37-38 37 38ZM600-160h38l144-144-19-19-18-20-145 145v38Zm163-163-18-20 37 39-19-19Z"/>
    </Icon>
  );
});

IconMaterialBookmarkManagerW100.displayName = 'OnesyIconMaterialBookmarkManagerW100';

export default IconMaterialBookmarkManagerW100;
