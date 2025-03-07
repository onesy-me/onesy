import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalLibraryFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalLibraryFilled'

      short_name='LocalLibrary'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-274v-286q0-32 23.5-54t55.5-20q79 12 150.5 46.5T480-498q59-55 130.5-89.5T761-634q32-2 55.5 20t23.5 54v286q0 32-21 54.5T766-195q-64 10-124 33t-112 61q-11 9-23.5 13.5T480-83q-14 0-26.5-4.5T430-101q-52-38-112-61t-124-33q-32-2-53-24.5T120-274Zm360-326q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Z"/>
    </Icon>
  );
});

IconMaterialLocalLibraryFilled.displayName = 'OnesyIconMaterialLocalLibraryFilled';

export default IconMaterialLocalLibraryFilled;
