import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTextToSpeech = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextToSpeech'

      short_name='TextToSpeech'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-800h406l-80 80H160v640h440v-80h80v160H80Zm160-160v-80h280v80H240Zm0-120v-80h200v80H240Zm360 0L440-520H320v-200h120l160-160v520Zm80-122v-276q36 21 58 57t22 81q0 45-22 81t-58 57Zm0 172v-84q70-25 115-86.5T840-620q0-78-45-139.5T680-846v-84q104 27 172 112.5T920-620q0 112-68 197.5T680-310Z"/>
    </Icon>
  );
});

IconMaterialTextToSpeech.displayName = 'OnesyIconMaterialTextToSpeech';

export default IconMaterialTextToSpeech;
