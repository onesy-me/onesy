import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialImagesmode = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Imagesmode'

      short_name='Imagesmode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-280h480L570-480 450-320l-90-120-120 160ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Zm140-360q25 0 42.5-17.5T400-620q0-25-17.5-42.5T340-680q-25 0-42.5 17.5T280-620q0 25 17.5 42.5T340-560Z"/>
    </Icon>
  );
});

IconMaterialImagesmode.displayName = 'OnesyIconMaterialImagesmode';

export default IconMaterialImagesmode;
