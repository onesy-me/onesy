import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAppRegistrationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AppRegistrationW100'

      short_name='AppRegistration'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-200q-16.5 0-28.25-11.75T200-240q0-16.5 11.75-28.25T240-280q16.5 0 28.25 11.75T280-240q0 16.5-11.75 28.25T240-200Zm0-240q-16.5 0-28.25-11.75T200-480q0-16.5 11.75-28.25T240-520q16.5 0 28.25 11.75T280-480q0 16.5-11.75 28.25T240-440Zm0-240q-16.5 0-28.25-11.75T200-720q0-16.5 11.75-28.25T240-760q16.5 0 28.25 11.75T280-720q0 16.5-11.75 28.25T240-680Zm240 0q-16.5 0-28.25-11.75T440-720q0-16.5 11.75-28.25T480-760q16.5 0 28.25 11.75T520-720q0 16.5-11.75 28.25T480-680Zm240 0q-16.5 0-28.25-11.75T680-720q0-16.5 11.75-28.25T720-760q16.5 0 28.25 11.75T760-720q0 16.5-11.75 28.25T720-680ZM480-440q-16.5 0-28.25-11.75T440-480q0-16.5 11.75-28.25T480-520q16.5 0 28.25 11.75T520-480q0 16.5-11.75 28.25T480-440Zm52 240v-78l231-230 77 78-230 230h-78Zm268-230-37-38 37 38ZM560-228h38l144-144-19-19-18-20-145 145v38Zm163-163-18-20 37 39-19-19Z"/>
    </Icon>
  );
});

IconMaterialAppRegistrationW100.displayName = 'OnesyIconMaterialAppRegistrationW100';

export default IconMaterialAppRegistrationW100;
