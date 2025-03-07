import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNewspaperW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NewspaperW100'

      short_name='Newspaper'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M166-146q-25 0-42.5-17.5T106-206v-553q0-5 4.5-7t8.5 2l28 28 55-56q5-5 11-5t11 5l56 56 56-56q5-5 11-5t11 5l55 56 56-56q5-5 11-5t11 5l56 56 55-56q5-5 11-5t11 5l56 56 56-56q5-5 11-5t11 5l55 56 28-28q4-4 8.5-2t4.5 7v553q0 25-17.5 42.5T794-146H166Zm0-28h300v-292H134v260q0 14 9 23t23 9Zm328 0h300q14 0 23-9t9-23v-100H494v132Zm0-160h332v-132H494v132ZM134-494h692v-182H134v182Z"/>
    </Icon>
  );
});

IconMaterialNewspaperW100.displayName = 'OnesyIconMaterialNewspaperW100';

export default IconMaterialNewspaperW100;
