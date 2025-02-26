import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialYoutubeSearchedForW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='YoutubeSearchedForW100'

      short_name='YoutubeSearchedFor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M814-186 586-414q-30 26-69 40t-77 14q-35 0-65.5-9.5T318-396l20-20q23 14 48 21t54 7q81 0 136.5-55.5T632-580q0-81-55.5-136.5T440-772q-81 0-136.5 55.5T248-580l64-66 20 20-98 98-98-98 20-20 64 66q0-92 64-156t156-64q92 0 156 64t64 156q0 41-15 80t-39 66l228 228-20 20Z"/>
    </Icon>
  );
});

IconMaterialYoutubeSearchedForW100.displayName = 'OnesyIconMaterialYoutubeSearchedForW100';

export default IconMaterialYoutubeSearchedForW100;
