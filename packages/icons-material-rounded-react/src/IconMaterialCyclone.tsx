import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCyclone = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Cyclone'

      short_name='Cyclone'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-320q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400Zm0 240q-114 0-203.5-13.5T125-202q-20-5-32.5-19.5T80-256q0-16 13.5-25.5T123-286q42 11 74.5 17.5L250-258q-42-43-66-100t-24-122q0-114 13.5-203.5T202-835q5-20 19.5-32.5T256-880q16 0 25.5 13.5T286-837q-12 42-18.5 74.5T258-710q43-42 100-66t122-24q114 0 203.5 13.5T835-758q20 5 32.5 19.5T880-704q0 16-13.5 25.5T837-674q-42-12-74.5-18.5T710-702q42 43 66 100t24 122q0 114-13.5 203.5T758-125q-5 20-19.5 32.5T704-80q-16 0-25.5-13.5T674-123q11-42 17.5-74.5L702-250q-43 42-100 66t-122 24Zm0-80q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70Z"/>
    </Icon>
  );
});

IconMaterialCyclone.displayName = 'OnesyIconMaterialCyclone';

export default IconMaterialCyclone;
