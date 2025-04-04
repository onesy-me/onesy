import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCategoryW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CategoryW100Filled'

      short_name='Category'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m332-560 148-244 148 244H332Zm367.53 440q-58.53 0-99.03-40.5T560-259.53q0-58.53 40.5-99.5T699.53-400q58.53 0 99.5 40.97t40.97 99.5q0 58.53-40.97 99.03t-99.5 40.5ZM160-140v-240h240v240H160Z"/>
    </Icon>
  );
});

IconMaterialCategoryW100Filled.displayName = 'OnesyIconMaterialCategoryW100Filled';

export default IconMaterialCategoryW100Filled;
