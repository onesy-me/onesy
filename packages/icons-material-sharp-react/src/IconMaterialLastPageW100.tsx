import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLastPageW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LastPageW100'

      short_name='LastPage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m280-276-20-20 184-184-184-184 20-20 204 204-204 204Zm386 10v-428h28v428h-28Z"/>
    </Icon>
  );
});

IconMaterialLastPageW100.displayName = 'OnesyIconMaterialLastPageW100';

export default IconMaterialLastPageW100;
