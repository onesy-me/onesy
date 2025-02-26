import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDresserW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DresserW100'

      short_name='Dresser'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-146v-582q0-24.75 17.63-42.38Q247.25-788 272-788h416q24.75 0 42.38 17.62Q748-752.75 748-728v582h-28v-92H240v92h-28Zm28-336h226v-278H272q-14 0-23 9t-9 23v246Zm254-153h226v-93q0-14-9-23t-23-9H494v125Zm0 153h226v-125H494v125Zm-68 136h108v-28H426v28ZM240-454v188h480v-188H240Zm0 0v188-188Z"/>
    </Icon>
  );
});

IconMaterialDresserW100.displayName = 'OnesyIconMaterialDresserW100';

export default IconMaterialDresserW100;
