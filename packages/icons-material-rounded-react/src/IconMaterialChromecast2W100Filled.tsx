import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChromecast2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Chromecast2W100Filled'

      short_name='Chromecast2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M411-172q-100 0-169.5-69.5T172-411q0-96 65.5-165.5T397-651v-75q0-42 30-72t72-30q28 0 53.5 12t42.5 34l167 211q11-8 23.5-7.5T806-567l40 51q8 10 6.5 22.5T841-473l-22 17q-10 8-22 6.5T777-461l-40-51q-8-10-7-21.5t10-19.5L572-765q-14-17-33-26t-40-9q-31 0-52.5 21.5T425-726v75q95 5 160.5 74T651-411q0 100-70 169.5T411-172Zm0-28q88 0 150-61.5T623-411q0-88-62-150t-150-62q-88 0-149.5 62T200-411q0 88 61.5 149.5T411-200Z"/>
    </Icon>
  );
});

IconMaterialChromecast2W100Filled.displayName = 'OnesyIconMaterialChromecast2W100Filled';

export default IconMaterialChromecast2W100Filled;
