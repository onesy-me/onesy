import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHomeAndGardenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeAndGardenW100Filled'

      short_name='HomeAndGarden'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-212q-25 0-42.5-17.5T212-272v-324l-92 68q-5 3-10 2.5t-9-5.5q-4-5-3.5-10t5.5-9l342-252q8-6 17-8.5t18-2.5q9 0 18.5 2.5T516-802l286 211q12 9 6.5 23T788-557q-21 0-43 5t-45 15q-66-29-124.5-15.5T469-491q-48 48-61.5 106T423-260q-3 7-5.5 13.5T413-233q-3 9-10.5 15t-17.5 6H272ZM700-97q-46 32-87 31.5T539-99q-33-33-33.5-74.5T537-260q-32-46-31.5-87t33.5-74q33-33 74.5-33.5T700-423q46-32 87-31.5t74 33.5q33 33 33.5 74.5T863-260q32 46 31.5 87T861-99q-33 33-74.5 33.5T700-97Zm0-137q11 0 18.5-7.5T726-260q0-11-7.5-18.5T700-286q-11 0-18.5 7.5T674-260q0 11 7.5 18.5T700-234Z"/>
    </Icon>
  );
});

IconMaterialHomeAndGardenW100Filled.displayName = 'OnesyIconMaterialHomeAndGardenW100Filled';

export default IconMaterialHomeAndGardenW100Filled;
