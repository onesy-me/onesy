import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestMiniW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestMiniW100Filled'

      short_name='NestMini'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M300-412q11 0 19.5-8.5T328-440q0-11-8.5-19.5T300-468q-11 0-19.5 8.5T272-440q0 11 8.5 19.5T300-412Zm120 0q11 0 19.5-8.5T448-440q0-11-8.5-19.5T420-468q-11 0-19.5 8.5T392-440q0 11 8.5 19.5T420-412Zm120 0q11 0 19.5-8.5T568-440q0-11-8.5-19.5T540-468q-11 0-19.5 8.5T512-440q0 11 8.5 19.5T540-412Zm120 0q11 0 19.5-8.5T688-440q0-11-8.5-19.5T660-468q-11 0-19.5 8.5T632-440q0 11 8.5 19.5T660-412ZM480-92q-72.5 0-135.82-27.55-63.31-27.55-110.2-74.43-46.88-46.89-74.43-110.2Q132-367.5 132-440q0-141 96.5-242.5T466-789v-131q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v131q141 5 237.5 106.5T828-440q0 72.5-27.55 135.82-27.55 63.31-74.43 110.2-46.89 46.88-110.2 74.43Q552.5-92 480-92Z"/>
    </Icon>
  );
});

IconMaterialNestMiniW100Filled.displayName = 'OnesyIconMaterialNestMiniW100Filled';

export default IconMaterialNestMiniW100Filled;
