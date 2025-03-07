import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTabletW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabletW100'

      short_name='Tablet'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M152-212q-25 0-42.5-17.5T92-272v-416q0-25 17.5-42.5T152-748h656q25 0 42.5 17.5T868-688v416q0 25-17.5 42.5T808-212H152Zm34-508h-34q-14 0-23 9t-9 23v416q0 14 9 23t23 9h34v-480Zm28 480h532v-480H214v480Zm560-480v480h34q14 0 23-9t9-23v-416q0-14-9-23t-23-9h-34Zm0 0h66-66Zm-588 0h-66 66Z"/>
    </Icon>
  );
});

IconMaterialTabletW100.displayName = 'OnesyIconMaterialTabletW100';

export default IconMaterialTabletW100;
