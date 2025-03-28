import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGlobeAsiaW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GlobeAsiaW100Filled'

      short_name='GlobeAsia'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m472-161 6-167.43L600-448h78v74l89.42 14q10.81-28 17.19-58 6.39-30 6.39-62 0-89-43.5-161.5T632-756v116H512v120h-80v120h-81l-79-120h-40v40l-69 79q26 104 111.5 172T472-161Zm160-239H512v-80h120v80Zm0-240h81l-41 120h-81l41-120ZM472.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q124-407.65 124-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q399.65-828 471.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q820-552.35 820-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q544.35-132 472.17-132Z"/>
    </Icon>
  );
});

IconMaterialGlobeAsiaW100Filled.displayName = 'OnesyIconMaterialGlobeAsiaW100Filled';

export default IconMaterialGlobeAsiaW100Filled;
