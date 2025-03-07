import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsAccountBoxFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsAccountBoxFilled'

      short_name='SettingsAccountBox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M580-40q-25 0-42.5-17.5T520-100v-280q0-25 17.5-42.5T580-440h280q25 0 42.5 17.5T920-380v280q0 25-17.5 42.5T860-40H580Zm20-60h240q8 0 14-6t6-14q0-6-2-11t-6-10q-25-27-58.5-43T720-200q-40 0-73.5 16T588-141q-2 2-8 21 0 8 6 14t14 6Zm120-140q25 0 42.5-17.5T780-300q0-25-17.5-42.5T720-360q-25 0-42.5 17.5T660-300q0 25 17.5 42.5T720-240ZM403-80q-15 0-24.5-8.5T367-110l-13-96q-13-5-24.5-12T307-233l-62 26q-25 11-50 2t-39-32l-47-82q-14-23-8-49t27-43l53-40q-1-7-1-13.5v-27q0-6.5 1-13.5l-53-40q-21-17-27-43t8-49l47-82q14-23 39-32t50 2l62 26q11-8 23-15t24-12l9-66q4-26 23.5-44t46.5-18h94q27 0 46.5 18t23.5 44l9 66q13 5 24.5 12t22.5 15l62-26q25-11 50-2t39 32l47 82q14 23 8 49t-27 43l-25 18q-5 4-11 5.5t-12 1.5H629q-6 0-11-4t-7-9q-16-38-50.5-62.5T482-620q-58 0-99 41t-41 99q0 44 23.5 78.5T427-351q5 2 9 7t4 11v219q0 14-10.5 24T403-80Z"/>
    </Icon>
  );
});

IconMaterialSettingsAccountBoxFilled.displayName = 'OnesyIconMaterialSettingsAccountBoxFilled';

export default IconMaterialSettingsAccountBoxFilled;
