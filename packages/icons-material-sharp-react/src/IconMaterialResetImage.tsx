import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialResetImage = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResetImage'

      short_name='ResetImage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-600v-240h80v134q50-62 122.5-98T480-840q118 0 210.5 67T820-600h-87q-34-72-101-116t-152-44q-57 0-107.5 21T284-680h76v80H120Zm120 360h480L570-440 450-280l-90-120-120 160ZM120-80v-400h80v320h560v-320h80v400H120Z"/>
    </Icon>
  );
});

IconMaterialResetImage.displayName = 'OnesyIconMaterialResetImage';

export default IconMaterialResetImage;
