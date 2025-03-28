import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWallpaper = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Wallpaper'

      short_name='Wallpaper'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-320h80v240h240v80H120Zm400 0v-80h240v-240h80v320H520ZM240-280l120-160 90 120 120-160 150 200H240ZM120-520v-320h320v80H200v240h-80Zm640 0v-240H520v-80h320v320h-80Zm-140-40q-26 0-43-17t-17-43q0-26 17-43t43-17q26 0 43 17t17 43q0 26-17 43t-43 17Z"/>
    </Icon>
  );
});

IconMaterialWallpaper.displayName = 'OnesyIconMaterialWallpaper';

export default IconMaterialWallpaper;
