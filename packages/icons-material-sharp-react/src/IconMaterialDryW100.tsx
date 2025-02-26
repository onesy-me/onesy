import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDryW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DryW100'

      short_name='Dry'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M632-624q2-32-5.5-53.5T597-727q-26-32-35-60.5t-7-64.5h29q-2 32 5 54t33 57q22 30 31 57t7 60h-28Zm128 0q2-32-5.5-53.5T725-727q-26-32-35-60.5t-7-64.5h29q-2 32 5 54t33 57q22 30 31 57t7 60h-28Zm-52 492H132v-365l366-237 27 31-95 159h318v28H381l106-178-327 212v322h548v28ZM532-388v-28h296v28H532Zm0 128v-28h256v28H532ZM346-427Z"/>
    </Icon>
  );
});

IconMaterialDryW100.displayName = 'OnesyIconMaterialDryW100';

export default IconMaterialDryW100;
