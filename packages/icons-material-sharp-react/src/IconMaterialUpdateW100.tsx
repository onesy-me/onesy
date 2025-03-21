import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUpdateW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UpdateW100'

      short_name='Update'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M481-172q-64 0-120-24t-98-66q-42-42-66-98t-24-120q0-64 24-120t66-98q42-42 98-66t120-24q65 0 124 26.5T709-688v-96h28v144H593v-28h96q-42-43-95-67.5T481-760q-117 0-198.5 81.5T201-480q0 117 81.5 198.5T481-200q105 0 182.5-68.5T758-440h28q-14 116-101 192t-204 76Zm130-158L467-474v-206h28v194l136 136-20 20Z"/>
    </Icon>
  );
});

IconMaterialUpdateW100.displayName = 'OnesyIconMaterialUpdateW100';

export default IconMaterialUpdateW100;
