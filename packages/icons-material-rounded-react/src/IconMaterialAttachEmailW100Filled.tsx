import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAttachEmailW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AttachEmailW100Filled'

      short_name='AttachEmail'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M145-292q-24.75 0-42.37-17.63Q85-327.25 85-352v-416q0-24.75 17.63-42.38Q120.25-828 145-828h576q24.75 0 42.38 17.62Q781-792.75 781-768v198q0 12.75-8.62 21.37Q763.75-540 751-540h-52q-44.74 0-76.37 30Q591-480 591-436v114q0 12.75-8.62 21.37Q573.75-292 561-292H145Zm288-308L140-793q-5-3-10.5-2t-8.5 6q-4 5-2.5 10.5t6.5 8.5l291 193q8.13 5 17.06 5 8.94 0 16.94-5l291-193q5-3 6.5-9t-2.5-11q-3-5-8.5-5.5T726-793L433-600Zm320 466q-51 0-86.5-35.5T631-256v-180q0-28.56 19.72-48.28Q670.44-504 699-504q28.56 0 48.28 19.72Q767-464.56 767-436v166q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-166q0-17-11.5-28.5T699-476q-17 0-28.5 11.5T659-436v180q0 38.77 27.66 66.39Q714.32-162 753.16-162t66.34-27.61Q847-217.23 847-256v-146q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v146q0 51-35.5 86.5T753-134Z"/>
    </Icon>
  );
});

IconMaterialAttachEmailW100Filled.displayName = 'OnesyIconMaterialAttachEmailW100Filled';

export default IconMaterialAttachEmailW100Filled;
