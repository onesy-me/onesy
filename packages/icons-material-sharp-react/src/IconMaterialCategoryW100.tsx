import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCategoryW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CategoryW100'

      short_name='Category'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m332-560 148-244 148 244H332Zm368 440q-59 0-99.5-40.5T560-260q0-59 40.5-99.5T700-400q59 0 99.5 40.5T840-260q0 59-40.5 99.5T700-120Zm-540-20v-240h240v240H160Zm539.97-8q47.03 0 79.53-32.47t32.5-79.5q0-47.03-32.47-79.53t-79.5-32.5q-47.03 0-79.53 32.47t-32.5 79.5q0 47.03 32.47 79.53t79.5 32.5ZM188-168h184v-184H188v184Zm192-420h200L480-748 380-588Zm100 0ZM372-352Zm328 92Z"/>
    </Icon>
  );
});

IconMaterialCategoryW100.displayName = 'OnesyIconMaterialCategoryW100';

export default IconMaterialCategoryW100;
