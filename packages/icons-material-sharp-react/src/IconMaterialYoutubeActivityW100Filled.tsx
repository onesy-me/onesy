import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialYoutubeActivityW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='YoutubeActivityW100Filled'

      short_name='YoutubeActivity'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M592-294q-22 1-41 1.5t-34.16.5h-32.72q-56.65 0-106.12-2-43-1-84-3.5t-59.77-7.32q-21.22-5.63-36.72-20.91Q182-341 176.62-362.22 172-381 169.5-407t-3.5-51q-2-28-2-58t2-58q1-25 3.5-51t7.32-44.77q5.63-21.22 20.91-36.72Q213-722 234.22-727.38 253-732 294-734.5t84-3.5q49.41-2 106-2t106 2q43 1 84 3.5t59.77 7.32q21.22 5.63 36.72 20.91Q786-691 791.38-669.78 796-651 798.5-625t3.5 51q2 28.4 2 57.59V-503q-15-7-30.97-10-15.97-3-32.75-3Q674-516 627-469.15q-47 46.86-47 113.33 0 16.82 3 32.21 3 15.4 9 29.61ZM420-420l166-96-166-96v192Zm288 160v-64h-64v-64h64v-64h64v64h64v64h-64v64h-64Z"/>
    </Icon>
  );
});

IconMaterialYoutubeActivityW100Filled.displayName = 'OnesyIconMaterialYoutubeActivityW100Filled';

export default IconMaterialYoutubeActivityW100Filled;
