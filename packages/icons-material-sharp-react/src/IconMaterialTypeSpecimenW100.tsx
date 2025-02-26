import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTypeSpecimenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TypeSpecimenW100'

      short_name='TypeSpecimen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M385-380h30l44-108h150l44 108h32L541-740h-14L385-380Zm84-134 62-164h4l64 164H469ZM266-292v-536h536v536H266Zm28-28h480v-480H294v480ZM158-184v-504h28v476h476v28H158Zm136-616v480-480Z"/>
    </Icon>
  );
});

IconMaterialTypeSpecimenW100.displayName = 'OnesyIconMaterialTypeSpecimenW100';

export default IconMaterialTypeSpecimenW100;
