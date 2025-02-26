import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDomainVerificationOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DomainVerificationOffFilled'

      short_name='DomainVerificationOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M818-28 686-160H80v-640h80v114L26-820l57-57L875-85l-57 57ZM160-240h446L206-640h-46v400Zm711 37-71-71v-366H434L274-800h606v560q0 10-2 19.5t-7 17.5ZM607-467l-58-58 57-57 58 58-57 57Zm-57 57L438-298 296-440l58-58 84 84 54-54 58 58Z"/>
    </Icon>
  );
});

IconMaterialDomainVerificationOffFilled.displayName = 'OnesyIconMaterialDomainVerificationOffFilled';

export default IconMaterialDomainVerificationOffFilled;
