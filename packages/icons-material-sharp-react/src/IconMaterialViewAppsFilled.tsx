import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewAppsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewAppsFilled'

      short_name='ViewApps'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-160v-640l240 40v560L40-160Zm320-40v-560h240v560H360Zm560 40-240-40v-560l240-40v640Zm-800-95 80-13v-424l-80-14v451Zm320-25h80v-400h-80v400Zm400 26v-452l-80 14v424l80 14Zm-720-1v-451l80 14v424l-80 13Zm320-25v-400h80v400h-80Zm400 26-80-14v-424l80-14v452Z"/>
    </Icon>
  );
});

IconMaterialViewAppsFilled.displayName = 'OnesyIconMaterialViewAppsFilled';

export default IconMaterialViewAppsFilled;
