import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBookmarkAddedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkAddedW100'

      short_name='BookmarkAdded'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m676-600-76-76 19-20 57 57 141-142 20 20-161 161ZM480-296.33 252-198v-590h268v28H280v518l200-86 200 86v-278h28v322l-228-98.33ZM280-760h240-240Z"/>
    </Icon>
  );
});

IconMaterialBookmarkAddedW100.displayName = 'OnesyIconMaterialBookmarkAddedW100';

export default IconMaterialBookmarkAddedW100;
