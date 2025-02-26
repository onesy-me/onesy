import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWineBarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WineBarW100'

      short_name='WineBar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M356-172v-28h110v-186q-86-13-133-73.5T286-600v-188h388v188q0 80-47 140.5T494-386v186h110v28H356Zm124-242q65 0 113-50t53-122H314q5 72 53 122t113 50ZM314-614h332v-146H314v146Zm166 200Z"/>
    </Icon>
  );
});

IconMaterialWineBarW100.displayName = 'OnesyIconMaterialWineBarW100';

export default IconMaterialWineBarW100;
