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
      <path d="M292-146v-28h174v-276L190-760v-28h580v28L494-450v276h174v28H292Zm6-534h364l72-80H226l72 80Zm182 204 157-176H323l157 176Zm0 0Z"/>
    </Icon>
  );
});

IconMaterialLocalBarW100.displayName = 'OnesyIconMaterialLocalBarW100';

export default IconMaterialLocalBarW100;
