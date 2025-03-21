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
      <path d="M700.06-232q-31.06 0-52.56-21.44-21.5-21.45-21.5-52.5 0-31.06 21.46-52.56Q668.92-380 700-380q14 0 25.5 4.5T746-362v-176q0-12.75 8.63-21.38Q763.25-568 776-568h50q11 0 19.5 8.05T854-540q0 11-8.5 19.5T826-512h-52v206q0 31.08-21.44 52.54Q731.11-232 700.06-232ZM414-512q-44.55 0-76.27-31.72Q306-575.45 306-620t31.73-76.28Q369.45-728 414-728t76.27 31.72Q522-664.55 522-620t-31.73 76.28Q458.55-512 414-512ZM176-232q-12.75 0-21.37-8.63Q146-249.25 146-262v-22q0-22 13.5-41.5T196-356q57-27 110.5-39.5T414-408q22 0 42 1.5t39 5.5q13 2 19 14t1 25q-5 15-7 30t-2 30q0 9.24 1 18.12t3 16.88q3 14-5 24.5T484-232H176Z"/>
    </Icon>
  );
});

IconMaterialArtistW100Filled.displayName = 'OnesyIconMaterialArtistW100Filled';

export default IconMaterialArtistW100Filled;
