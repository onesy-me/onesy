import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMicExternalOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicExternalOffW100'

      short_name='MicExternalOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M378-688 264-802q8-2 13.5-2h8.5q39 0 66.5 27.5T380-710v9.5q0 4.5-2 12.5Zm362 362-28-28v-422H520v230l-28-28v-230h248v478ZM272-156v-124h-28l-34-332h92L98-816l20-20 704 704-20 20-282-282v238H272Zm-3-152h34l27-276h-89l28 276Zm223 124v-238L356-558l-28 278h-28v96h192ZM269-584h-28 89-61Z"/>
    </Icon>
  );
});

IconMaterialMicExternalOffW100.displayName = 'OnesyIconMaterialMicExternalOffW100';

export default IconMaterialMicExternalOffW100;
