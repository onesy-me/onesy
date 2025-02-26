import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPersonPlayFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonPlayFilled'

      short_name='PersonPlay'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-492 92-592q-12-12-12-28t12-28l100-100q12-12 28-12t28 12l100 100q12 12 12 28t-12 28L248-492q-12 12-28 12t-28-12ZM400-80q-17 0-28.5-11.5T360-120v-160q-50-4-99-11t-98-18q-17-4-27.5-19t-5.5-32q5-17 20.5-25t32.5-4q73 17 147.5 23t149.5 6q75 0 149.5-6T777-389q17-4 32.5 4t20.5 25q5 17-5.5 32T797-309q-49 11-98 18t-99 11v160q0 17-11.5 28.5T560-80H400Zm80-600q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0 280q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm191-100-46-80q-5-9-5-20t5-20l46-80q5-10 14-15t20-5h90q11 0 20 5t14 15l46 80q5 9 5 20t-5 20l-46 80q-5 10-14 15t-20 5h-90q-11 0-20-5t-14-15Z"/>
    </Icon>
  );
});

IconMaterialPersonPlayFilled.displayName = 'OnesyIconMaterialPersonPlayFilled';

export default IconMaterialPersonPlayFilled;
