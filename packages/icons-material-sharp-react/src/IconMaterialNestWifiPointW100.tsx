import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestWifiPointW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestWifiPointW100'

      short_name='NestWifiPoint'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M346-760q-60.23 0-103.11 42.89Q200-674.22 200-614v268q0 16 2.5 29t7.5 25h540q5-12 7.5-25t2.5-29v-268q0-60.22-42.89-103.11T614-760H346Zm0 588q-72.5 0-123.25-50.75T172-346v-268q0-72.5 50.75-123.25T346-788h268q72.5 0 123.25 50.75T788-614v268q0 72.5-50.75 123.25T614-172H346Zm18-28q0-14 9.2-23t22.8-9q13.6 0 22.8 9.2 9.2 9.2 9.2 22.8h104q0-14 9.2-23t22.8-9q13.6 0 22.8 9.2 9.2 9.2 9.2 22.8 57 0 87-16t51-48h-54q0 13.6-9.2 22.8-9.2 9.2-22.8 9.2-13.6 0-22.8-9.2-9.2-9.2-9.2-22.8H512q0 14-9.2 23t-22.8 9q-13.6 0-22.8-9.2-9.2-9.2-9.2-22.8H344q0 14-9.2 23t-22.8 9q-13.6 0-22.8-9.2-9.2-9.2-9.2-22.8h-54q21 32 51 48t87 16Zm-18-92h414-560 146Z"/>
    </Icon>
  );
});

IconMaterialNestWifiPointW100.displayName = 'OnesyIconMaterialNestWifiPointW100';

export default IconMaterialNestWifiPointW100;
