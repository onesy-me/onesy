import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScreenSearchDesktop = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenSearchDesktop'

      short_name='ScreenSearchDesktop'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M20,5H4v11h16V5z M15.47,15.03l-2.09-2.09c-1.35,0.87-3.17,0.71-4.36-0.47c-1.37-1.37-1.37-3.58,0-4.95 s3.58-1.37,4.95,0c1.18,1.18,1.34,3,0.47,4.36l2.09,2.09L15.47,15.03z" opacity=".3"/><path d="M4,18h16c1.1,0,1.99-0.9,1.99-2L22,5c0-1.1-0.9-2-2-2H4C2.9,3,2,3.9,2,5v11C2,17.1,2.9,18,4,18z M4,5h16v11H4V5z"/><rect height="2" width="22" x="1" y="19"/><path d="M13.97,7.53c-1.37-1.37-3.58-1.37-4.95,0s-1.37,3.58,0,4.95c1.18,1.18,3,1.34,4.36,0.47l2.09,2.09l1.06-1.06l-2.09-2.09 C15.31,10.53,15.16,8.71,13.97,7.53z M12.91,11.41c-0.78,0.78-2.05,0.78-2.83,0c-0.78-0.78-0.78-2.05,0-2.83s2.05-0.78,2.83,0 C13.69,9.37,13.69,10.63,12.91,11.41z"/></g></g>
    </Icon>
  );
});

IconMaterialScreenSearchDesktop.displayName = 'OnesyIconMaterialScreenSearchDesktop';

export default IconMaterialScreenSearchDesktop;
