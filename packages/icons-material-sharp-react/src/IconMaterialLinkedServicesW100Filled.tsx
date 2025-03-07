import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLinkedServicesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LinkedServicesW100Filled'

      short_name='LinkedServices'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M742-616q-49 0-84.5-32T617-728H342q-5 44-35.5 75T232-617v274q48 5 80 40.5t32 84.5q0 53-36.5 89.5T218-92q-53 0-89.5-36.5T92-218q0-49 32-84.5t80-40.5v-274q-48-5-80-40.5T92-742q0-53 36.5-89.5T217-868q49 0 84.5 32t40.5 80h275q5-48 40.5-80t84.5-32q52 0 89 37t37 89q0 53-37 89.5T742-616Zm0 524q-53 0-89.5-36.5T616-217q0-53 36.5-90t89.5-37q53 0 89.5 37t36.5 90q0 52-36.5 88.5T742-92Z"/>
    </Icon>
  );
});

IconMaterialLinkedServicesW100Filled.displayName = 'OnesyIconMaterialLinkedServicesW100Filled';

export default IconMaterialLinkedServicesW100Filled;
