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
      <path d="M700.06-232q-31.06 0-52.56-21.44-21.5-21.45-21.5-52.5 0-31.06 21.46-52.56Q668.92-380 700-380q14 0 25.5 4.5T746-362v-176q0-12.75 8.63-21.38Q763.25-568 776-568h50q11 0 19.5 8.05T854-540q0 11-8.5 19.5T826-512h-52v206q0 31.08-21.44 52.54Q731.11-232 700.06-232ZM176-232q-12.75 0-21.37-8.63Q146-249.25 146-262v-22q0-22 13.5-41.5T196-356q57-27 110.5-39.5T414-408q27 0 50.5 3t46.5 8q7 2 9 6t1 9q-1 5-4.5 8t-8.5 2q-21-4-45.5-6t-48.5-2q-52 0-103 12t-101 36q-17 8-26.5 21t-9.5 27v24h328q7 0 10.5 4.32t3.5 9.5q0 5.18-3.5 9.68T502-232H176Zm238-280q-44.55 0-76.27-31.72Q306-575.45 306-620t31.73-76.28Q369.45-728 414-728t76.27 31.72Q522-664.55 522-620t-31.73 76.28Q458.55-512 414-512Zm0-28q33 0 56.5-23.5T494-620q0-33-23.5-56.5T414-700q-33 0-56.5 23.5T334-620q0 33 23.5 56.5T414-540Zm0-80Zm0 360Z"/>
    </Icon>
  );
});

IconMaterialArtistW100.displayName = 'OnesyIconMaterialArtistW100';

export default IconMaterialArtistW100;
