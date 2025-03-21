import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEditRoad = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditRoad'

      short_name='EditRoad'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><polygon opacity=".3" points="15.55,17.42 15.55,18.45 16.58,18.45 20.03,15 19,13.97"/><polygon points="18,4 16,4 16,11.9 18,9.9"/><rect height="16" width="2" x="4" y="4"/><rect height="4" width="2" x="10" y="4"/><rect height="4" width="2" x="10" y="10"/><rect height="4" width="2" x="10" y="16"/><path d="M22.56,12.59l-1.15-1.15c-0.59-0.59-1.54-0.59-2.12,0L14,16.73V20h3.27l5.29-5.29C23.15,14.12,23.15,13.17,22.56,12.59z M16.58,18.45h-1.03v-1.03L19,13.97L20.03,15L16.58,18.45z"/></g></g>
    </Icon>
  );
});

IconMaterialEditRoad.displayName = 'OnesyIconMaterialEditRoad';

export default IconMaterialEditRoad;
