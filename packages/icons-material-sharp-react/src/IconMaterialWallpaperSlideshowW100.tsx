import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWallpaperSlideshowW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WallpaperSlideshowW100'

      short_name='WallpaperSlideshow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M657.04-629q-11.04 0-18.54-7.46-7.5-7.47-7.5-18.5 0-11.04 7.46-18.54 7.47-7.5 18.5-7.5 11.04 0 18.54 7.46 7.5 7.47 7.5 18.5 0 11.04-7.46 18.54-7.47 7.5-18.5 7.5ZM368-416l66-86 64 74 100-124 102 136H368ZM158-184v-504h28v476h476v28H158Zm108-411v-233h218v28H294v205h-28Zm0 303v-203h28v175h190v28H266Zm318 0v-28h190v-175h28v203H584Zm190-303v-205H584v-28h218v233h-28Z"/>
    </Icon>
  );
});

IconMaterialWallpaperSlideshowW100.displayName = 'OnesyIconMaterialWallpaperSlideshowW100';

export default IconMaterialWallpaperSlideshowW100;
