import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhotoFrameW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoFrameW100Filled'

      short_name='PhotoFrame'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-202v-50H92v-496h776v496H768v50H192Zm81-184h415L560-557 440-403l-79-96-88 113Z"/>
    </Icon>
  );
});

IconMaterialPhotoFrameW100Filled.displayName = 'OnesyIconMaterialPhotoFrameW100Filled';

export default IconMaterialPhotoFrameW100Filled;
