import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHevc = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Hevc'

      short_name='Hevc'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-390v-180q0-13 8.5-21.5T150-600q13 0 21.5 8.5T180-570v50h40v-50q0-13 8.5-21.5T250-600q13 0 21.5 8.5T280-570v180q0 13-8.5 21.5T250-360q-13 0-21.5-8.5T220-390v-70h-40v70q0 13-8.5 21.5T150-360q-13 0-21.5-8.5T120-390Zm200 0v-180q0-13 8.5-21.5T350-600h80q13 0 21.5 8.5T460-570q0 13-8.5 21.5T430-540h-50v20h50q13 0 21.5 8.5T460-490q0 13-8.5 21.5T430-460h-50v40h50q13 0 21.5 8.5T460-390q0 13-8.5 21.5T430-360h-80q-13 0-21.5-8.5T320-390Zm193-11-27-165q-2-14 6.5-24t22.5-10q11 0 19 7t10 18l26 155 26-155q2-11 10-18t19-7q14 0 22.5 10t6.5 24l-27 165q-3 18-17 29.5T578-360h-16q-18 0-32-11.5T513-401Zm207 41q-17 0-28.5-11.5T680-400v-160q0-17 11.5-28.5T720-600h80q17 0 28.5 11.5T840-560v21q0 13-8.5 21.5T810-509q-13 0-21.5-8.5T780-539v-1h-40v120h40v-1q0-13 8.5-21.5T810-451q13 0 21.5 8.5T840-421v21q0 17-11.5 28.5T800-360h-80Z"/>
    </Icon>
  );
});

IconMaterialHevc.displayName = 'OnesyIconMaterialHevc';

export default IconMaterialHevc;
