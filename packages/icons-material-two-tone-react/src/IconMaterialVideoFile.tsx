import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideoFile = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoFile'

      short_name='VideoFile'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M13,9V4H6v16h12V9H13z M16,17.06L14,16v1c0,0.55-0.45,1-1,1H9c-0.55,0-1-0.45-1-1v-4c0-0.55,0.45-1,1-1h4 c0.55,0,1,0.45,1,1v1l2-1.06V17.06z" opacity=".3"/><path d="M14,2H6C4.9,2,4,2.9,4,4v16c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8L14,2z M6,20V4h7v5h5v11H6z M14,14l2-1.06v4.12L14,16v1 c0,0.55-0.45,1-1,1H9c-0.55,0-1-0.45-1-1v-4c0-0.55,0.45-1,1-1h4c0.55,0,1,0.45,1,1V14z"/></g>
    </Icon>
  );
});

IconMaterialVideoFile.displayName = 'OnesyIconMaterialVideoFile';

export default IconMaterialVideoFile;
