import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHail = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Hail'

      short_name='Hail'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24" y="0"/></g><g><path d="M12,6c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S13.1,6,12,6z M17,2h2c0,2.7-0.93,4.41-2.3,5.5c-0.5,0.4-1.1,0.7-1.7,0.9V22h-2 v-6h-2v6H9V10.1c-0.3,0.1-0.5,0.2-0.6,0.3C7.87,10.81,7,11.43,7,14H5c0-2.06,0.35-3.78,2.11-5.29C8.21,7.81,10,7,12,7 s2.68-0.46,3.48-1.06C15.96,5.55,17,4.76,17,2z M4,16h3v6H4V16z"/></g>
    </Icon>
  );
});

IconMaterialHail.displayName = 'OnesyIconMaterialHail';

export default IconMaterialHail;
