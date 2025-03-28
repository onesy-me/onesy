import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBookmarkHeartW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkHeartW100'

      short_name='BookmarkHeart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-417q42-38 66.5-62.5T585-521q14-17 18.5-30.31 4.5-13.32 4.5-28.64Q608-609 587.32-630q-20.68-21-49.32-21-16.92 0-32.62 6.91-15.71 6.9-25.38 19.09-9.84-12.19-25.42-19.09Q439-651 421.6-651q-28.47 0-49.04 20.9Q352-609.21 352-580.27q0 15.27 4 28.27t18 30q14 17 39 42t67 63ZM252-198v-590h456v590l-228-98.33L252-198Zm28-44 200-86 200 86v-518H280v518Zm0-518h400-400Z"/>
    </Icon>
  );
});

IconMaterialBookmarkHeartW100.displayName = 'OnesyIconMaterialBookmarkHeartW100';

export default IconMaterialBookmarkHeartW100;
