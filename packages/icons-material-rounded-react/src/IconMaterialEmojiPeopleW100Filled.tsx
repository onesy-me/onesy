import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEmojiPeopleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiPeopleW100Filled'

      short_name='EmojiPeople'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M402-120v-512q-66-11-112.5-58.5T230-804q-1-5 3-9.5t9-4.5q6 0 10 4t6 10q14 64 63 105t109 41h100q21 0 34 5.5t28 20.5l156 156q4 4 4.5 9.5T748-456q-5 5-10 5t-10-5L558-626v506q0 6-4 10t-10 4q-6 0-10-4t-4-10v-220H430v220q0 6-4 10t-10 4q-6 0-10-4t-4-10Zm78-612q-27 0-45.5-18.5T416-796q0-27 18.5-45.5T480-860q27 0 45.5 18.5T544-796q0 27-18.5 45.5T480-732Z"/>
    </Icon>
  );
});

IconMaterialEmojiPeopleW100Filled.displayName = 'OnesyIconMaterialEmojiPeopleW100Filled';

export default IconMaterialEmojiPeopleW100Filled;
