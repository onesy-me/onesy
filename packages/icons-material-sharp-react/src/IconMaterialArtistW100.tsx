import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArtistW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArtistW100'

      short_name='Artist'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M746-568h108v56h-80v206q0 31.08-21.44 52.54Q731.11-232 700.06-232q-31.06 0-52.56-21.44-21.5-21.45-21.5-52.5 0-31.06 21.46-52.56Q668.92-380 700-380q14 0 25.5 4.5T746-362v-206ZM146-232v-52q0-22 13.5-41.5T196-356q57-27 110.5-39.5T414-408q32 0 59.5 3.5T527-393q-3 7-5.5 12.5T517-370q-22-5-49.5-7.5T414-380q-52 0-103 12t-101 36q-17 8-26.5 21t-9.5 27v24h338q2 8 3.88 14.67 1.87 6.66 5.12 13.33H146Zm268-280q-44.55 0-76.27-31.72Q306-575.45 306-620t31.73-76.28Q369.45-728 414-728t76.27 31.72Q522-664.55 522-620t-31.73 76.28Q458.55-512 414-512Zm0-28q33 0 56.5-23.5T494-620q0-33-23.5-56.5T414-700q-33 0-56.5 23.5T334-620q0 33 23.5 56.5T414-540Zm0-80Zm0 360Z"/>
    </Icon>
  );
});

IconMaterialArtistW100.displayName = 'OnesyIconMaterialArtistW100';

export default IconMaterialArtistW100;
