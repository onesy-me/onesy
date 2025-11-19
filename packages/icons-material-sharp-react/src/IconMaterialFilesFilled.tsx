import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilesFilled'

      short_name='Files'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-200h440v-440h360v640H80Zm0-240v-320h320L80-400Zm153-40 207-207v207H233Z"/>
    </Icon>
  );
});

IconMaterialFilesFilled.displayName = 'OnesyIconMaterialFilesFilled';

export default IconMaterialFilesFilled;
