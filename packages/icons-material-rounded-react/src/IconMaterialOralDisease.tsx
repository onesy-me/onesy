import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOralDisease = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OralDisease'

      short_name='OralDisease'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-80q-17 0-28.5-11.5T200-120v-280q0-17 11.5-28.5T240-440h40v-184l-80-79q-23-23-23-57t23-57l75-75q12-12 28.5-12t28.5 12q12 12 12 28.5T332-835l-76 75 81 80q11 11 17 26t6 31v183h40q17 0 28.5 11.5T440-400v280q0 17-11.5 28.5T400-80H240Zm320 0q-17 0-28.5-11.5T520-120v-280q0-17 11.5-28.5T560-440h40v-125q-52-14-86-56t-34-99q0-66 47-113t113-47q66 0 113 47t47 113q0 57-34 99t-86 56v125h40q17 0 28.5 11.5T760-400v280q0 17-11.5 28.5T720-80H560Zm80-560q33 0 56.5-23.5T720-720q0-33-23.5-56.5T640-800q-33 0-56.5 23.5T560-720q0 33 23.5 56.5T640-640ZM280-160h80v-200h-80v200Zm320 0h80v-200h-80v200Zm-320 0h80-80Zm320 0h80-80Z"/>
    </Icon>
  );
});

IconMaterialOralDisease.displayName = 'OnesyIconMaterialOralDisease';

export default IconMaterialOralDisease;
