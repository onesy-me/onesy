import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSaveAs = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SaveAs'

      short_name='SaveAs'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M16.17,5H5v14h9.4l4.6-4.6V7.83L16.17,5z M12,18c-1.66,0-3-1.34-3-3s1.34-3,3-3s3,1.34,3,3S13.66,18,12,18z M15,10H6V6h9V10z" opacity=".3"/><path d="M21,12.4V7l-4-4H5C3.89,3,3,3.9,3,5v14c0,1.1,0.89,2,2,2h7.4l2-2H5V5h11.17L19,7.83v6.57L21,12.4z M15,15 c0,1.66-1.34,3-3,3s-3-1.34-3-3s1.34-3,3-3S15,13.34,15,15z M6,6h9v4H6V6z M19.99,16.25l1.77,1.77L16.77,23H15v-1.77L19.99,16.25z M23.25,16.51l-0.85,0.85l-1.77-1.77l0.85-0.85c0.2-0.2,0.51-0.2,0.71,0l1.06,1.06C23.45,16,23.45,16.32,23.25,16.51z"/></g>
    </Icon>
  );
});

IconMaterialSaveAs.displayName = 'OnesyIconMaterialSaveAs';

export default IconMaterialSaveAs;
