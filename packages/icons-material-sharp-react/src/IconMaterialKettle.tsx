import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKettle = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Kettle'

      short_name='Kettle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-200v-520L120-880h600v120h80q33 0 56.5 23.5T880-680v200q0 33-23.5 56.5T800-400h-80v200H240Zm80-80h320v-520H280l40 52v468Zm400-200h80v-200h-80v200ZM480-320h120v-440H480v440ZM120-80v-80h720v80H120Zm340-460Z"/>
    </Icon>
  );
});

IconMaterialKettle.displayName = 'OnesyIconMaterialKettle';

export default IconMaterialKettle;
