import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilter9PlusW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter9PlusW100'

      short_name='Filter9Plus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M380-426h128v-268H360v148h120v92H380v28Zm100-148h-92v-92h92v92ZM266-292v-536h536v536H266Zm28-28h480v-480H294v480ZM158-184v-504h28v476h476v28H158Zm136-136v-480 480Zm346-146h28v-80h80v-28h-80v-80h-28v80h-80v28h80v80Z"/>
    </Icon>
  );
});

IconMaterialFilter9PlusW100.displayName = 'OnesyIconMaterialFilter9PlusW100';

export default IconMaterialFilter9PlusW100;
