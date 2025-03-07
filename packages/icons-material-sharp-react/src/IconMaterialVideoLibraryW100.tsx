import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideoLibraryW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoLibraryW100'

      short_name='VideoLibrary'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m460-428 206-132-206-132v264ZM266-292v-536h536v536H266Zm28-28h480v-480H294v480ZM158-184v-504h28v476h476v28H158Zm136-616v480-480Z"/>
    </Icon>
  );
});

IconMaterialVideoLibraryW100.displayName = 'OnesyIconMaterialVideoLibraryW100';

export default IconMaterialVideoLibraryW100;
