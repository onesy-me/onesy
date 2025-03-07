import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPersonPinW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonPinW100Filled'

      short_name='PersonPin'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M382-212H232q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H578l-77 77q-5 5-10 7t-11 2q-6 0-11-2t-10-7l-77-77Zm98-264q48 0 81-33t33-81q0-48-33-81t-81-33q-48 0-81 33t-33 81q0 48 33 81t81 33ZM222-240h516q11-6 15-11.5t7-14.5q-54-53-125.5-83.5T480-380q-83 0-154.5 30.5T200-266q3 9 7 14.5t15 11.5Z"/>
    </Icon>
  );
});

IconMaterialPersonPinW100Filled.displayName = 'OnesyIconMaterialPersonPinW100Filled';

export default IconMaterialPersonPinW100Filled;
