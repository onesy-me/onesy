import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLibraryMusicW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LibraryMusicW100'

      short_name='LibraryMusic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M483.94-376q31.06 0 52.56-21.46Q558-418.92 558-450v-232h106v-56H530v236q-9-11-20.5-16.5T484-524q-31.08 0-52.54 21.44Q410-481.11 410-450.06q0 31.06 21.44 52.56 21.45 21.5 52.5 21.5ZM266-292v-536h536v536H266Zm28-28h480v-480H294v480ZM158-184v-504h28v476h476v28H158Zm136-616v480-480Z"/>
    </Icon>
  );
});

IconMaterialLibraryMusicW100.displayName = 'OnesyIconMaterialLibraryMusicW100';

export default IconMaterialLibraryMusicW100;
