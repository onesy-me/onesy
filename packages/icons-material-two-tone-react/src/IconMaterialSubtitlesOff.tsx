import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSubtitlesOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubtitlesOff'

      short_name='SubtitlesOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><polygon opacity=".3" points="8.83,6 12.83,10 18,10 18,12 14.83,12 20,17.17 20,6"/><polygon opacity=".3" points="15.17,18 13.17,16 6,16 6,14 11.17,14 8,10.83 8,12 6,12 6,10 7.17,10 4,6.83 4,18"/><g><polygon points="18,10 12.83,10 14.83,12 18,12"/><path d="M20,4H6.83l2,2H20v11.17l1.76,1.76C21.91,18.65,22,18.34,22,18V6C22,4.9,21.1,4,20,4z"/><path d="M1.04,3.87l1.2,1.2C2.09,5.35,2,5.66,2,6v12c0,1.1,0.9,2,2,2h13.17l2.96,2.96l1.41-1.41L2.45,2.45L1.04,3.87z M4,6.83 L7.17,10H6v2h2v-1.17L11.17,14H6v2h7.17l2,2H4V6.83z"/></g></g></g>
    </Icon>
  );
});

IconMaterialSubtitlesOff.displayName = 'OnesyIconMaterialSubtitlesOff';

export default IconMaterialSubtitlesOff;
