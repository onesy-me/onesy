import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGifBoxW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GifBoxW100Filled'

      short_name='GifBox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v616H172Zm134-234h108v-68h-28v40h-52v-92h79v-28H306v148Zm160 0h28v-148h-28v148Zm80 0h28v-60h60v-28h-60v-32h80v-28H546v148Z"/>
    </Icon>
  );
});

IconMaterialGifBoxW100Filled.displayName = 'OnesyIconMaterialGifBoxW100Filled';

export default IconMaterialGifBoxW100Filled;
