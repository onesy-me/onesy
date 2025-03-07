import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMusicCastW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MusicCastW100Filled'

      short_name='MusicCast'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M571-212q-44.55 0-76.27-31.73Q463-275.45 463-320t31.73-76.27Q526.45-428 571-428q23 0 44 9t36 27v-372h182v84H679v360q0 44.55-31.72 76.27Q615.55-212 571-212ZM127-320q0-92 35-172.5t95.5-141Q318-694 398.79-729q80.8-35 172.21-35v28q-85 0-160.98 32.76-75.99 32.76-132.72 89.44-56.72 56.68-89.51 132.08Q155-406.32 155-320h-28Zm168 0q0-57 21.99-107.44 22-50.44 59.52-87.94 37.51-37.51 87.54-59.06Q514.08-596 571-596v28q-103 0-175.5 72.33Q323-423.33 323-320h-28Z"/>
    </Icon>
  );
});

IconMaterialMusicCastW100Filled.displayName = 'OnesyIconMaterialMusicCastW100Filled';

export default IconMaterialMusicCastW100Filled;
