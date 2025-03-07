import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTransgenderW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TransgenderW100'

      short_name='Transgender'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.16-334q68.84 0 117.34-48.66t48.5-117.5q0-68.84-48.66-117.34T479.84-666Q411-666 362.5-617.34T314-499.84q0 68.84 48.66 117.34t117.5 48.5ZM466-66v-80h-80v-28h80v-132q-76-8-128-63t-52-131q0-35 12-67.5t34-60.5l-70-70-56 56-19-19 56-56-129-129v140H86v-188h188v28H134l129 129 56-56 19 19-56 56 71 71q27-22 59.5-34.5T480-694q35 0 67.5 12.5T607-647l219-219H686v-28h188v188h-28v-140L627-627q22 27 34.5 59.47Q674-535.05 674-500q0 76-52 131t-128 63v132h80v28h-80v80h-28Z"/>
    </Icon>
  );
});

IconMaterialTransgenderW100.displayName = 'OnesyIconMaterialTransgenderW100';

export default IconMaterialTransgenderW100;
