import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLibraryMusic = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LibraryMusic'

      short_name='LibraryMusic'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M8 16h12V4H8v12zm4.5-6c.57 0 1.08.19 1.5.51V5h4v2h-3v5.5c0 1.38-1.12 2.5-2.5 2.5S10 13.88 10 12.5s1.12-2.5 2.5-2.5z" opacity=".3"/><path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zm-7.5-1c1.38 0 2.5-1.12 2.5-2.5V7h3V5h-4v5.51c-.42-.32-.93-.51-1.5-.51-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"/>
    </Icon>
  );
});

IconMaterialLibraryMusic.displayName = 'OnesyIconMaterialLibraryMusic';

export default IconMaterialLibraryMusic;
