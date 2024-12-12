import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShelvesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShelvesW100'

      short_name='Shelves'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-87v-785h28v85h560v-85h28v785h-28v-85H200v85h-28Zm28-433h112v-148h176v148h272v-239H200v239Zm0 320h272v-148h176v148h112v-292H200v292Zm140-320h120v-120H340v120Zm160 320h120v-120H500v120ZM340-520h120-120Zm160 320h120-120Z"/>
    </Icon>
  );
});

IconMaterialShelvesW100.displayName = 'OnesyIconMaterialShelvesW100';

export default IconMaterialShelvesW100;
