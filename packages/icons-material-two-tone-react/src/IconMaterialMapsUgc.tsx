import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMapsUgc = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MapsUgc'

      short_name='MapsUgc'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" fillRule="evenodd" height="24" width="24" y="0"/><path d="M12,4c4.41,0,8,3.59,8,8s-3.59,8-8,8c-1.18,0-2.34-0.26-3.43-0.78c-0.27-0.13-0.56-0.19-0.86-0.19 c-0.19,0-0.38,0.03-0.56,0.08l-3.2,0.94l0.94-3.2c0.14-0.47,0.1-0.98-0.11-1.42C4.26,14.34,4,13.18,4,12C4,7.59,7.59,4,12,4" fillOpacity=".3"/><g><path d="M12,4c4.41,0,8,3.59,8,8s-3.59,8-8,8c-1.18,0-2.34-0.26-3.43-0.78c-0.27-0.13-0.56-0.19-0.86-0.19 c-0.19,0-0.38,0.03-0.56,0.08l-3.2,0.94l0.94-3.2c0.14-0.47,0.1-0.98-0.11-1.42C4.26,14.34,4,13.18,4,12C4,7.59,7.59,4,12,4 M12,2 C6.48,2,2,6.48,2,12c0,1.54,0.36,2.98,0.97,4.29L1,23l6.71-1.97C9.02,21.64,10.46,22,12,22c5.52,0,10-4.48,10-10 C22,6.48,17.52,2,12,2L12,2z"/></g><polygon fillRule="evenodd" points="13,8 11,8 11,11 8,11 8,13 11,13 11,16 13,16 13,13 16,13 16,11 13,11"/>
    </Icon>
  );
});

IconMaterialMapsUgc.displayName = 'OnesyIconMaterialMapsUgc';

export default IconMaterialMapsUgc;
