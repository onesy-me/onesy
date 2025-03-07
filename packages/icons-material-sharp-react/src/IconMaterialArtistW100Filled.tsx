import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArtistW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArtistW100Filled'

      short_name='Artist'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M700.06-232q-31.06 0-52.56-21.44-21.5-21.45-21.5-52.5 0-31.06 21.46-52.56Q668.92-380 700-380q14 0 25.5 4.5T746-362v-206h108v56h-80v206q0 31.08-21.44 52.54Q731.11-232 700.06-232ZM414-512q-44.55 0-76.27-31.72Q306-575.45 306-620t31.73-76.28Q369.45-728 414-728t76.27 31.72Q522-664.55 522-620t-31.73 76.28Q458.55-512 414-512ZM146-232v-52q0-22 13.5-41.5T196-356q57-27 110.5-39.5T414-408q32 0 59.5 3.5T527-393q-17 38-20 80.5t14 80.5H146Z"/>
    </Icon>
  );
});

IconMaterialArtistW100Filled.displayName = 'OnesyIconMaterialArtistW100Filled';

export default IconMaterialArtistW100Filled;
