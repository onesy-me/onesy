import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGridViewW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GridViewW100'

      short_name='GridView'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-520q-11 0-19.5-8.5T172-548v-212q0-11 8.5-19.5T200-788h212q11 0 19.5 8.5T440-760v212q0 11-8.5 19.5T412-520H200Zm0 348q-11 0-19.5-8.5T172-200v-212q0-11 8.5-19.5T200-440h212q11 0 19.5 8.5T440-412v212q0 11-8.5 19.5T412-172H200Zm348-348q-11 0-19.5-8.5T520-548v-212q0-11 8.5-19.5T548-788h212q11 0 19.5 8.5T788-760v212q0 11-8.5 19.5T760-520H548Zm0 348q-11 0-19.5-8.5T520-200v-212q0-11 8.5-19.5T548-440h212q11 0 19.5 8.5T788-412v212q0 11-8.5 19.5T760-172H548ZM200-548h212v-212H200v212Zm348 0h212v-212H548v212Zm0 348h212v-212H548v212Zm-348 0h212v-212H200v212Zm348-348Zm0 136Zm-136 0Zm0-136Z"/>
    </Icon>
  );
});

IconMaterialGridViewW100.displayName = 'OnesyIconMaterialGridViewW100';

export default IconMaterialGridViewW100;
