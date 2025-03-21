import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMinorCrash = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MinorCrash'

      short_name='MinorCrash'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-704 200-824l56-56 120 120-56 56Zm320 0-56-56 120-120 56 56-120 120Zm-200-56v-200h80v200h-80ZM120 0v-360l98-280h524l98 280V0H720v-80H240V0H120Zm112-440h496l-42-120H274l-42 120Zm68 240q25 0 42.5-17.5T360-260q0-25-17.5-42.5T300-320q-25 0-42.5 17.5T240-260q0 25 17.5 42.5T300-200Zm360 0q25 0 42.5-17.5T720-260q0-25-17.5-42.5T660-320q-25 0-42.5 17.5T600-260q0 25 17.5 42.5T660-200Zm-460 40h560v-200H200v200Zm0 0v-200 200Z"/>
    </Icon>
  );
});

IconMaterialMinorCrash.displayName = 'OnesyIconMaterialMinorCrash';

export default IconMaterialMinorCrash;
