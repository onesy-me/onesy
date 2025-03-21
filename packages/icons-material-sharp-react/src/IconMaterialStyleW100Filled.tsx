import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStyleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StyleW100Filled'

      short_name='Style'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m177-142-74-36 74-158v194Zm120-158 77 214h-77v-214Zm193 178L291-668l355-129 200 545-356 130Zm-41-438q17 0 28.5-11.5T489-600q0-17-11.5-28.5T449-640q-17 0-28.5 11.5T409-600q0 17 11.5 28.5T449-560Z"/>
    </Icon>
  );
});

IconMaterialStyleW100Filled.displayName = 'OnesyIconMaterialStyleW100Filled';

export default IconMaterialStyleW100Filled;
