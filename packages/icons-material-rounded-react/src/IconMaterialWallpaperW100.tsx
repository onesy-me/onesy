import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWallpaperW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WallpaperW100'

      short_name='Wallpaper'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-194q0-6 4-10t10-4q6 0 10 4t4 10v194q0 12 10 22t22 10h194q6 0 10 4t4 10q0 6-4 10t-10 4H232Zm496 0H534q-6 0-10-4t-4-10q0-6 4-10t10-4h194q12 0 22-10t10-22v-194q0-6 4-10t10-4q6 0 10 4t4 10v194q0 26-17 43t-43 17ZM448-318l88-109q5-6 12-6t12 6l72 97q5 8 1 16t-13 8H348q-9 0-13-8t2-16l36-47q5-6 11.5-6t11.5 5l52 60ZM172-728q0-26 17-43t43-17h194q6 0 10 4t4 10q0 6-4 10t-10 4H232q-12 0-22 10t-10 22v194q0 6-4 10t-10 4q-6 0-10-4t-4-10v-194Zm616 0v194q0 6-4 10t-10 4q-6 0-10-4t-4-10v-194q0-12-10-22t-22-10H534q-6 0-10-4t-4-10q0-6 4-10t10-4h194q26 0 43 17t17 43ZM610-570q-17 0-28.5-11.5T570-610q0-17 11.5-28.5T610-650q17 0 28.5 11.5T650-610q0 17-11.5 28.5T610-570Z"/>
    </Icon>
  );
});

IconMaterialWallpaperW100.displayName = 'OnesyIconMaterialWallpaperW100';

export default IconMaterialWallpaperW100;
