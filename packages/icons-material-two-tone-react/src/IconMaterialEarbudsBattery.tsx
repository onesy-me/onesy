import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEarbudsBattery = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EarbudsBattery'

      short_name='EarbudsBattery'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><rect height="7" opacity=".3" width="2" x="18" y="9"/><path d="M10.62,6C8.76,6,7.25,7.51,7.25,9.38v5.25c0,1.04-0.84,1.88-1.88,1.88S3.5,15.66,3.5,14.62v-4.7C3.66,9.97,3.83,10,4,10 c1.1,0,2-0.9,2-2S5.1,6,4,6S2,6.9,2,8c0,0.04,0,6.62,0,6.62C2,16.49,3.51,18,5.38,18s3.38-1.51,3.38-3.38V9.38 c0-1.04,0.84-1.88,1.88-1.88s1.88,0.84,1.88,1.88v4.7C12.34,14.03,12.17,14,12,14c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2 c0-0.04,0-6.62,0-6.62C14,7.51,12.49,6,10.62,6z"/><path d="M21,7h-1V6h-2v1h-1c-0.55,0-1,0.45-1,1v9c0,0.55,0.45,1,1,1h4c0.55,0,1-0.45,1-1V8C22,7.45,21.55,7,21,7z M20,16h-2V9h2 V16z"/></g></g>
    </Icon>
  );
});

IconMaterialEarbudsBattery.displayName = 'OnesyIconMaterialEarbudsBattery';

export default IconMaterialEarbudsBattery;
