import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOrderApprove = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OrderApprove'

      short_name='OrderApprove'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m691-150 139-138-42-42-97 95-39-39-42 43 81 81ZM240-600h480v-80H240v80ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40ZM120-80v-760h720v347q-19-9-39-15t-41-9v-243H200v562h243q5 31 15.5 59T486-86l-6 6-60-60-60 60-60-60-60 60-60-60-60 60Zm120-200h203q3-21 9-41t15-39H240v80Zm0-160h284q38-37 88.5-58.5T720-520H240v80Zm-40 242v-562 562Z"/>
    </Icon>
  );
});

IconMaterialOrderApprove.displayName = 'OnesyIconMaterialOrderApprove';

export default IconMaterialOrderApprove;
