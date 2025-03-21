import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRangeHood = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RangeHood'

      short_name='RangeHood'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-168q0-16 6.5-30.5T104-464l176-176v-120q0-33 23.5-56.5T360-840h240q33 0 56.5 23.5T680-760v120l177 177q11 11 17 25.5t6 30.5v167q0 33-23.5 56.5T800-160H160Zm320-600H360v119q0 16-6 30.5T337-585L232-480h496L623-585q-11-11-17-25.5t-6-30.5v-119H480ZM160-240h640v-160H160v160Zm270-52q-13 0-21.5-8.5T400-322q0-13 8.5-21.5T430-352h100q13 0 21.5 8.5T560-322q0 13-8.5 21.5T530-292H430Z"/>
    </Icon>
  );
});

IconMaterialRangeHood.displayName = 'OnesyIconMaterialRangeHood';

export default IconMaterialRangeHood;
