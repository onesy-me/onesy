import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSleepScoreFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SleepScoreFilled'

      short_name='SleepScore'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-880q117 0 198.5 81.5T880-600h-80q0-40-14.5-74.5T746-736l-55 93q-10 16-21.5 35T645-575q-14 15-35 15t-36-14q-15-14-15-35t15-36q14-14 33.5-25t35.5-21l93-55q-27-25-61.5-39.5T600-800v-80ZM483-80q-84 0-157.5-32t-128-86.5Q143-253 111-326.5T79-484q0-146 93-257.5T409-880q-18 99 11 193.5T520-521q71 71 165.5 100T879-410q-26 144-138 237T483-80Z"/>
    </Icon>
  );
});

IconMaterialSleepScoreFilled.displayName = 'OnesyIconMaterialSleepScoreFilled';

export default IconMaterialSleepScoreFilled;
