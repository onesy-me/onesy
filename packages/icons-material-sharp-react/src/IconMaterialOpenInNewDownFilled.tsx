import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOpenInNewDownFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInNewDownFilled'

      short_name='OpenInNewDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v360h-80v-280H200v560h280v80H120Zm440 0v-80h144L332-572l56-56 372 371v-143h80v280H560Z"/>
    </Icon>
  );
});

IconMaterialOpenInNewDownFilled.displayName = 'OnesyIconMaterialOpenInNewDownFilled';

export default IconMaterialOpenInNewDownFilled;
