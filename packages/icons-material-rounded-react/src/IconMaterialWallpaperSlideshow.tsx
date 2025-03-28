import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWallpaperSlideshow = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WallpaperSlideshow'

      short_name='WallpaperSlideshow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-640q-17 0-28.5-11.5T640-680q0-17 11.5-28.5T680-720q17 0 28.5 11.5T720-680q0 17-11.5 28.5T680-640Zm39 240H401q-13 0-18.5-11t2.5-21l67-88q6-8 16-8t16 8l46 60 76-99q6-8 16-8t16 8l97 127q8 10 2.5 21T719-400ZM160-80q-33 0-56.5-23.5T80-160v-520q0-17 11.5-28.5T120-720q17 0 28.5 11.5T160-680v520h520q17 0 28.5 11.5T720-120q0 17-11.5 28.5T680-80H160Zm80-720q0-33 23.5-56.5T320-880h160q17 0 28.5 11.5T520-840q0 17-11.5 28.5T480-800H320v175q0 17-11.5 28.5T280-585q-17 0-28.5-11.5T240-625v-175Zm80 560q-33 0-56.5-23.5T240-320v-145q0-17 11.5-28.5T280-505q17 0 28.5 11.5T320-465v145h160q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240H320Zm480 0H640q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320h160v-145q0-17 11.5-28.5T840-505q17 0 28.5 11.5T880-465v145q0 33-23.5 56.5T800-240Zm80-560v175q0 17-11.5 28.5T840-585q-17 0-28.5-11.5T800-625v-175H640q-17 0-28.5-11.5T600-840q0-17 11.5-28.5T640-880h160q33 0 56.5 23.5T880-800Z"/>
    </Icon>
  );
});

IconMaterialWallpaperSlideshow.displayName = 'OnesyIconMaterialWallpaperSlideshow';

export default IconMaterialWallpaperSlideshow;
