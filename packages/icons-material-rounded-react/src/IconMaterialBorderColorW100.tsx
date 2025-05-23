import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBorderColorW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderColorW100'

      short_name='BorderColor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M108 0Q97 0 88.5-8T80-28q0-11 8.5-19.5T108-56h744q11 0 19.5 8t8.5 20q0 11-8.5 19.5T852 0H108Zm132-277h39l364-364-19-20-20-19-364 364v39Zm-28-2v-37q0-6 1.5-11t6.5-10l441-440q5-5 10.5-7t10.5-2q6 0 10.5 2t9.5 7l37 37q5 5 7 10t2 11q0 5-2 10.5t-7 10.5L299-258q-5 5-10 7t-11 2h-36q-13 0-21.5-8.5T212-279Zm509-440-39-39 39 39Zm-78 78-19-20-20-19 39 39Z"/>
    </Icon>
  );
});

IconMaterialBorderColorW100.displayName = 'OnesyIconMaterialBorderColorW100';

export default IconMaterialBorderColorW100;
