import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialElevation = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Elevation'

      short_name='Elevation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m82-120 258-360h202l298-348v708H82Zm70-233-64-46 172-241h202l188-219 60 52-212 247H300L152-353Zm86 153h522v-412L578-400H380L238-200Zm522 0Z"/>
    </Icon>
  );
});

IconMaterialElevation.displayName = 'OnesyIconMaterialElevation';

export default IconMaterialElevation;
