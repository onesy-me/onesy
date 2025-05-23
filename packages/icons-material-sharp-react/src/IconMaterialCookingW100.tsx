import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCookingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CookingW100'

      short_name='Cooking'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M412-210v-62q0-14-9-23t-23-9H158v-28h222q25 0 42.5 17.5T440-272v62h-28Zm108 0v-62q0-25 17.5-42.5T580-332h222v28H580q-14 0-23 9t-9 23v62h-28ZM266-412q-39 0-66.5-27.5T172-506v-98h616v98q0 39-27.5 66.5T694-412H266Zm0-28h428q27 0 46.5-19.5T760-506v-70H200v70q0 27 19.5 46.5T266-440Zm-94-244v-28h214v-10q0-13 8.5-21.5T416-752h128q13 0 21.5 8.5T574-722v10h214v28H172Zm28 244v-136 136Z"/>
    </Icon>
  );
});

IconMaterialCookingW100.displayName = 'OnesyIconMaterialCookingW100';

export default IconMaterialCookingW100;
