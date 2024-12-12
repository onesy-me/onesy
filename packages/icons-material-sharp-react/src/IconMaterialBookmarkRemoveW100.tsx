import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBookmarkRemoveW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkRemoveW100'

      short_name='BookmarkRemove'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M788-680H600v-28h188v28ZM480-296.33 252-198v-590h268v28H280v518l200-86 200 86v-278h28v322l-228-98.33ZM280-760h240-240Z"/>
    </Icon>
  );
});

IconMaterialBookmarkRemoveW100.displayName = 'OnesyIconMaterialBookmarkRemoveW100';

export default IconMaterialBookmarkRemoveW100;
