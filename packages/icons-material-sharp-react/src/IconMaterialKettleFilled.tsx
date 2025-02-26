import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKettleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KettleFilled'

      short_name='Kettle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-200v-520L120-880h600v120h80q33 0 56.5 23.5T880-680v200q0 33-23.5 56.5T800-400h-80v200H240Zm480-280h80v-200h-80v200ZM480-320h120v-440H480v440ZM120-80v-80h720v80H120Z"/>
    </Icon>
  );
});

IconMaterialKettleFilled.displayName = 'OnesyIconMaterialKettleFilled';

export default IconMaterialKettleFilled;
