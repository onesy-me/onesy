import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhoneDisabled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneDisabled'

      short_name='PhoneDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M719-600q15-36 25-75.5t15-84.5h-89l-17 94 66 66ZM200-202q40-3 80.5-13t80.5-27l-67-67-94 19v88Zm484-184-58-58q9-11 29.5-40t25.5-40L567-639l37-201h236v42q0 109-39 212T684-386ZM162-120h-42v-235l200-41 116 116q29-18 45.5-29.5T512-332L56-788l56-56 736 736-56 56-222-222q-92 75-197 114.5T162-120Zm557-480ZM361-242Z"/>
    </Icon>
  );
});

IconMaterialPhoneDisabled.displayName = 'OnesyIconMaterialPhoneDisabled';

export default IconMaterialPhoneDisabled;
