import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVilla = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Villa'

      short_name='Villa'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-200v-385q0-25 14-45.5t37-29.5l415-159q20-8 37 4t17 33v302h40q0-33 23.5-56.5T760-560q33 0 56.5 23.5T840-480v280q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200Zm80 0h160v-200q0-33 23.5-56.5T440-480h120v-244L200-585v385Zm240 0h120v-80q0-17 11.5-28.5T600-320q17 0 28.5 11.5T640-280v80h120v-200H440v200Zm-60-262Zm220 162Zm0 0Z"/>
    </Icon>
  );
});

IconMaterialVilla.displayName = 'OnesyIconMaterialVilla';

export default IconMaterialVilla;
