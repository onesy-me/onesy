import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNightlightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightlightW100'

      short_name='Nightlight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M586-132q-72 0-135.36-27.34-63.36-27.34-110.66-74.64t-74.64-110.66Q238-408 238-479.68q0-72.56 27.5-135.94Q293-679 340-726q47-47 110.71-74.5Q514.43-828 586-828q26 0 49.5 3t46.5 11q-68 62-108 148t-40 186q0 100 40 186t108 148q-23 8-46.5 11t-49.5 3Zm0-28h21q10 0 19-2-57-66-88.5-147.5T506-480q0-89 31.5-170.5T626-798q-9-2-19-2h-21q-133 0-226.5 93.5T266-480q0 133 93.5 226.5T586-160Zm-80-320Z"/>
    </Icon>
  );
});

IconMaterialNightlightW100.displayName = 'OnesyIconMaterialNightlightW100';

export default IconMaterialNightlightW100;
