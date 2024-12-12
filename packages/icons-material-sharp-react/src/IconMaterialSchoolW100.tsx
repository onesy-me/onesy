import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSchoolW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SchoolW100'

      short_name='School'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-240 252-364v-180l-104-56 332-180 332 180v236h-28v-220l-76 40v180L480-240Zm0-212 273-148-273-148-273 148 273 148Zm0 180 200-108v-148L480-420.19 280-528v148l200 108Zm0-180Zm0 44Zm0 0Z"/>
    </Icon>
  );
});

IconMaterialSchoolW100.displayName = 'OnesyIconMaterialSchoolW100';

export default IconMaterialSchoolW100;
