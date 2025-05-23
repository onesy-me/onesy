import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSubtitles = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Subtitles'

      short_name='Subtitles'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 18h16V6H4v12zm14-2h-2v-2h2v2zm-8-6h8v2h-8v-2zm-4 0h2v2H6v-2zm0 4h8v2H6v-2z" opacity=".3"/><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM6 10h2v2H6zm0 4h8v2H6zm10 0h2v2h-2zm-6-4h8v2h-8z"/>
    </Icon>
  );
});

IconMaterialSubtitles.displayName = 'OnesyIconMaterialSubtitles';

export default IconMaterialSubtitles;
