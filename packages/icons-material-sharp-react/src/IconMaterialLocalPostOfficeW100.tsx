import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalPostOfficeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalPostOfficeW100'

      short_name='LocalPostOffice'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M588-252v120H132v-296h160v-212q0-78.33 54.83-133.17Q401.67-828 480-828h160q78.33 0 133.17 54.83Q828-718.33 828-640v508h-28v-120H588Zm0-28h212v-360q0-66-47-113t-113-47H480q-66 0-113 47t-47 113v212h268v148Zm-228-6 200-114H160l200 114Zm0 32L160-368v208h400v-208L360-254ZM160-400v240-240Zm266-186v-28h268v28H426Z"/>
    </Icon>
  );
});

IconMaterialLocalPostOfficeW100.displayName = 'OnesyIconMaterialLocalPostOfficeW100';

export default IconMaterialLocalPostOfficeW100;
