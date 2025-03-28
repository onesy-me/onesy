import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBookmarkAddFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkAddFilled'

      short_name='BookmarkAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-680h-40q-17 0-28.5-11.5T600-720q0-17 11.5-28.5T640-760h40v-40q0-17 11.5-28.5T720-840q17 0 28.5 11.5T760-800v40h40q17 0 28.5 11.5T840-720q0 17-11.5 28.5T800-680h-40v40q0 17-11.5 28.5T720-600q-17 0-28.5-11.5T680-640v-40ZM480-240l-168 72q-40 17-76-6.5T200-241v-519q0-33 23.5-56.5T280-840h225q18 0 27 16t1 33q-7 17-10 34t-3 37q0 72 45.5 127T680-524q12 2 21.5 2.5t18.5.5q17 0 28.5 10.5T760-484v243q0 43-36 66.5t-76 6.5l-168-72Z"/>
    </Icon>
  );
});

IconMaterialBookmarkAddFilled.displayName = 'OnesyIconMaterialBookmarkAddFilled';

export default IconMaterialBookmarkAddFilled;
