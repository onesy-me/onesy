import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBookmarksFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarksFilled'

      short_name='Bookmarks'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-160 232-88q-40 17-76-6.5T120-161v-519q0-33 23.5-56.5T200-760h400q33 0 56.5 23.5T680-680v519q0 43-36 66.5T568-88l-168-72Zm400 0q-17 0-28.5-11.5T760-200v-640H280q-17 0-28.5-11.5T240-880q0-17 11.5-28.5T280-920h480q33 0 56.5 23.5T840-840v640q0 17-11.5 28.5T800-160Z"/>
    </Icon>
  );
});

IconMaterialBookmarksFilled.displayName = 'OnesyIconMaterialBookmarksFilled';

export default IconMaterialBookmarksFilled;
