import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlagCircle = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlagCircle'

      short_name='FlagCircle'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><g opacity=".3"><path d="M12,4c-4.41,0-8,3.59-8,8s3.59,8,8,8s8-3.59,8-8S16.41,4,12,4z M13,15l-1-2H9.5v5H8V7h6l1,2h3v6H13z"/></g><path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8 S16.41,20,12,20z"/><path d="M15,9l-1-2H8v11h1.5v-5H12l1,2h5V9H15z M16.5,13.5h-2.57l-1-2H9.5v-3h3.57l1,2h2.43V13.5z"/></g></g>
    </Icon>
  );
});

IconMaterialFlagCircle.displayName = 'OnesyIconMaterialFlagCircle';

export default IconMaterialFlagCircle;
