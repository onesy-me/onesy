import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewDay = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewDay'

      short_name='ViewDay'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-160v-80h720v80H120Zm0-160v-320h720v320H120Zm80-80h560v-160H200v160Zm-80-320v-80h720v80H120Zm80 320v-160 160Z"/>
    </Icon>
  );
});

IconMaterialViewDay.displayName = 'OnesyIconMaterialViewDay';

export default IconMaterialViewDay;
