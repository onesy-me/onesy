import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddHomeWork = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddHomeWork'

      short_name='AddHomeWork'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M12,5v1.4l5,3.57v1.11c0.33-0.05,0.66-0.08,1-0.08c1.08,0,2.09,0.25,3,0.68V5H12z M19,9h-2V7h2V9z" opacity=".3"/><path d="M12,5h9v6.68c0.75,0.36,1.43,0.84,2,1.42V3H10v1.97l2,1.43V5z"/><rect height="2" width="2" x="17" y="7"/><path d="M8,6l-7,5v10h6v-5h2v5h2.68C11.25,20.09,11,19.08,11,18v-4H5v5H3v-6.97l5-3.57l5,3.57v1.08c0.57-0.59,1.25-1.07,2-1.42V11 L8,6z"/><path d="M8,8.46l-5,3.57V19h2v-5h6v4c0-1.91,0.76-3.63,2-4.89v-1.08L8,8.46z" opacity=".3"/><g><path d="M18,13c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S20.76,13,18,13z M21,18.5h-2.5V21h-1v-2.5H15v-1h2.5V15h1v2.5H21V18.5z"/></g></g></g>
    </Icon>
  );
});

IconMaterialAddHomeWork.displayName = 'OnesyIconMaterialAddHomeWork';

export default IconMaterialAddHomeWork;
