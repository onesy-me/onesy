import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddAPhotoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddAPhotoW100'

      short_name='AddAPhoto'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-440h112-112ZM92-172v-536h176l74-80h198v28H354l-74 80H120v480h640v-340h28v368H92Zm668-508v-80h-80v-28h80v-80h28v80h80v28h-80v80h-28ZM440-300q59 0 99.5-40.5T580-440q0-59-40.5-99.5T440-580q-59 0-99.5 40.5T300-440q0 59 40.5 99.5T440-300Zm0-28q-48 0-80-32t-32-80q0-48 32-80t80-32q48 0 80 32t32 80q0 48-32 80t-80 32Z"/>
    </Icon>
  );
});

IconMaterialAddAPhotoW100.displayName = 'OnesyIconMaterialAddAPhotoW100';

export default IconMaterialAddAPhotoW100;
