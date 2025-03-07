import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInkEraserOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InkEraserOffW100Filled'

      short_name='InkEraserOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M784-136 585-335 484-230q-8 9-19.5 13.5T441-212H205q-12 0-23.5-5T162-230l-30-30q-18-18-18.5-42t17.5-43l218-226-213-213q-4-4-4.5-9.5T136-804q5-5 10-5t10 5l648 648q4 4 4.5 9.5T804-136q-5 5-10 5t-10-5Zm-1-426q0 11-4.5 22.5T765-519l-85 87q-8 8-20 8t-20-8L443-629q-8-8-8-20t8-20l84-88q9-10 20-14t22-4q11 0 22 4.5t20 13.5l153 153q9 9 14 20t5 22Z"/>
    </Icon>
  );
});

IconMaterialInkEraserOffW100Filled.displayName = 'OnesyIconMaterialInkEraserOffW100Filled';

export default IconMaterialInkEraserOffW100Filled;
