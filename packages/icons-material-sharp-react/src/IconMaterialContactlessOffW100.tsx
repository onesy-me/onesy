import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContactlessOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactlessOffW100'

      short_name='ContactlessOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m588-300-26-12q6-17 10-34l8-34 24 24q-3 14-7 28t-9 28Zm-130-54-26-10q9-27 13.5-56.5T450-480v-15.5q0-7.5-1-15.5l29 29q0 33-4.5 65.5T458-354Zm-130-54-26-12q3-14 5.5-29.5T310-480q0-15-2.5-30.5T302-540l26-12q5 17 7.5 35.5T338-480q0 18-2.5 36.5T328-408Zm289-47-27-27q0-43-7-85.5T562-648l26-12q15 42 22.5 87.5T618-480q0 6-.5 12t-.5 13ZM491-581l-23-23 19-9q2 8 3 15.5t1 16.5ZM852-68 705-215q-46 39-103 61t-122 22q-72 0-135.5-27.5T234-234q-47-47-74.5-110.5T132-480q0-65 22-122t61-103L90-830l20-20L872-88l-20 20Zm-372-92q59 0 111-20t94-55L235-685q-35 42-55 94t-20 111q0 133 93.5 226.5T480-160Zm296-136-21-21q22-36 33.5-77t11.5-86q0-133-93.5-226.5T480-800q-45 0-86 11.5T317-755l-21-21q40-25 86.5-38.5T480-828q72 0 135.5 27.5T726-726q47 47 74.5 110.5T828-480q0 51-13.5 97.5T776-296ZM536-536Zm-76 76Z"/>
    </Icon>
  );
});

IconMaterialContactlessOffW100.displayName = 'OnesyIconMaterialContactlessOffW100';

export default IconMaterialContactlessOffW100;
