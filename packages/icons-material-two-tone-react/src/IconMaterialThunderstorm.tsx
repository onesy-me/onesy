import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialThunderstorm = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Thunderstorm'

      short_name='Thunderstorm'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M17.73,9.01L16.2,8.87l-0.25-1.52C15.63,5.44,13.94,4,12,4c-1.44,0-2.77,0.78-3.48,2.04L8.03,6.91 L7.04,7.04C5.31,7.27,4,8.76,4,10.5C4,12.43,5.57,14,7.5,14h10c1.38,0,2.5-1.12,2.5-2.5C20,10.22,19.01,9.13,17.73,9.01z" opacity=".3"/><path d="M17.92,7.02C17.45,4.18,14.97,2,12,2C9.82,2,7.83,3.18,6.78,5.06C4.09,5.41,2,7.74,2,10.5C2,13.53,4.47,16,7.5,16h10 c2.48,0,4.5-2.02,4.5-4.5C22,9.16,20.21,7.23,17.92,7.02z M17.5,14h-10C5.57,14,4,12.43,4,10.5c0-1.74,1.31-3.23,3.04-3.46 l0.99-0.13l0.49-0.87C9.23,4.78,10.56,4,12,4c1.94,0,3.63,1.44,3.95,3.35l0.25,1.52l1.54,0.14C19.01,9.13,20,10.22,20,11.5 C20,12.88,18.88,14,17.5,14z"/><polygon points="14.8,17 11.9,20.32 13.9,21.32 11.55,24 14.2,24 17.1,20.68 15.1,19.68 17.45,17"/><polygon points="8.8,17 5.9,20.32 7.9,21.32 5.55,24 8.2,24 11.1,20.68 9.1,19.68 11.45,17"/></g></g>
    </Icon>
  );
});

IconMaterialThunderstorm.displayName = 'OnesyIconMaterialThunderstorm';

export default IconMaterialThunderstorm;
