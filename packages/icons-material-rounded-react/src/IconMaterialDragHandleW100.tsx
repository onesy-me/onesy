import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDragHandleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DragHandleW100'

      short_name='DragHandle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M226-386q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h508q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H226Zm0-160q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h508q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H226Z"/>
    </Icon>
  );
});

IconMaterialDragHandleW100.displayName = 'OnesyIconMaterialDragHandleW100';

export default IconMaterialDragHandleW100;
