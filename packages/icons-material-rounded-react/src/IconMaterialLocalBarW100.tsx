import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalBarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalBarW100'

      short_name='LocalBar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-174v-276L210-738q-3.56-4-5.78-9.25T202-758q0-13 8.71-21.5T232-788h496q12.58 0 21.29 8.38 8.71 8.38 8.71 21.2 0 5.42-2.22 10.85T750-738L494-450v276h160q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H306q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h160ZM298-680h364l72-80H226l72 80Zm182 204 157-176H323l157 176Zm0 0Z"/>
    </Icon>
  );
});

IconMaterialLocalBarW100.displayName = 'OnesyIconMaterialLocalBarW100';

export default IconMaterialLocalBarW100;
