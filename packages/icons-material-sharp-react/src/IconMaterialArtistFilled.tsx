import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArtistFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArtistFilled'

      short_name='Artist'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M700-160q-42 0-71-29t-29-71q0-42 29-71t71-29q8 0 18 1.5t22 6.5v-208h140v80h-80v220q0 42-29 71t-71 29ZM440-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM120-160v-112q0-35 17.5-63t46.5-43q62-31 126-46.5T440-440q42 0 83.5 6.5T607-414q-66 40-82 114.5T551-160H120Z"/>
    </Icon>
  );
});

IconMaterialArtistFilled.displayName = 'OnesyIconMaterialArtistFilled';

export default IconMaterialArtistFilled;
