import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHeadphonesBattery = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeadphonesBattery'

      short_name='HeadphonesBattery'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><g><rect height="7" opacity=".3" width="2" x="18" y="9"/><path d="M21,7h-1V6h-2v1h-1c-0.55,0-1,0.45-1,1v9c0,0.55,0.45,1,1,1h4c0.55,0,1-0.45,1-1V8C22,7.45,21.55,7,21,7z M20,16h-2V9h2 V16z"/></g><path d="M8,6c-3.31,0-6,2.69-6,6v4c0,1.1,0.9,2,2,2h2v-5H3.5v-1c0-2.48,2.02-4.5,4.5-4.5s4.5,2.02,4.5,4.5v1H10v5h2 c1.1,0,2-0.9,2-2v-4C14,8.69,11.31,6,8,6z"/></g></g>
    </Icon>
  );
});

IconMaterialHeadphonesBattery.displayName = 'OnesyIconMaterialHeadphonesBattery';

export default IconMaterialHeadphonesBattery;
