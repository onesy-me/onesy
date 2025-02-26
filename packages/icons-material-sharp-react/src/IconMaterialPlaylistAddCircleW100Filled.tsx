import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPlaylistAddCircleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlaylistAddCircleW100Filled'

      short_name='PlaylistAddCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M626-306h28v-80h80v-28h-80v-80h-28v80h-80v28h80v80Zm-320-80h68v-28h-68v28Zm0-120h228v-28H306v28Zm0-120h228v-28H306v28Zm174.17 494q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Z"/>
    </Icon>
  );
});

IconMaterialPlaylistAddCircleW100Filled.displayName = 'OnesyIconMaterialPlaylistAddCircleW100Filled';

export default IconMaterialPlaylistAddCircleW100Filled;
