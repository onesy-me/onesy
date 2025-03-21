import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSelectToSpeakW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SelectToSpeakW100'

      short_name='SelectToSpeak'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M564-195v-30q81-30 130.5-100T744-481q0-86-49.5-156T564-737v-30q92 33 150 111t58 175q0 97-58 175T564-195Zm-120-91L318-412H188v-136h130l126-126v388Zm120-70v-250q30 22 45 55.5t15 70.5q0 37-15.5 69.5T564-356Zm-148 2v-252l-86 86H216v80h114l86 86ZM92-680v-188h188v28H120v160H92ZM680-92v-28h160v-160h28v188H680ZM316-480Z"/>
    </Icon>
  );
});

IconMaterialSelectToSpeakW100.displayName = 'OnesyIconMaterialSelectToSpeakW100';

export default IconMaterialSelectToSpeakW100;
