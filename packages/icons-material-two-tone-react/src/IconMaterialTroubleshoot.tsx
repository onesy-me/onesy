import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTroubleshoot = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Troubleshoot'

      short_name='Troubleshoot'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M22,20.59l-4.69-4.69C18.37,14.55,19,12.85,19,11c0-4.42-3.58-8-8-8c-4.08,0-7.44,3.05-7.93,7h2.02C5.57,7.17,8.03,5,11,5 c3.31,0,6,2.69,6,6s-2.69,6-6,6c-2.42,0-4.5-1.44-5.45-3.5H3.4C4.45,16.69,7.46,19,11,19c1.85,0,3.55-0.63,4.9-1.69L20.59,22 L22,20.59z"/><polygon points="8.43,9.69 9.65,15 11.29,15 12.55,11.22 13.5,13.5 15.5,13.5 15.5,12 14.5,12 13.25,9 11.71,9 10.59,12.37 9.35,7 7.7,7 6.45,11 1,11 1,12.5 7.55,12.5"/></g></g>
    </Icon>
  );
});

IconMaterialTroubleshoot.displayName = 'OnesyIconMaterialTroubleshoot';

export default IconMaterialTroubleshoot;
