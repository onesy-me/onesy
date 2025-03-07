import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEmojiPeopleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiPeopleW100'

      short_name='EmojiPeople'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M402-106v-526q-70-11-117.5-63T228-818h28q10 69 60.5 114.5T430-658h100q21 0 34 5.5t28 20.5l166 166-20 20-180-180v520h-28v-234H430v234h-28Zm78-626q-27 0-45.5-18.5T416-796q0-27 18.5-45.5T480-860q27 0 45.5 18.5T544-796q0 27-18.5 45.5T480-732Z"/>
    </Icon>
  );
});

IconMaterialEmojiPeopleW100.displayName = 'OnesyIconMaterialEmojiPeopleW100';

export default IconMaterialEmojiPeopleW100;
