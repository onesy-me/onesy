import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpeechToTextW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeechToTextW100'

      short_name='SpeechToText'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M654.19-566Q632-566 616-581.53q-16-15.52-16-38.47v-180q0-22.95 15.87-38.47Q631.75-854 654.04-854q22.96 0 38.46 15.53Q708-822.95 708-800v180q0 22.95-15.47 38.47Q677.06-566 654.19-566ZM172-132v-696h322v28H200v640h440v-94h28v122H172Zm134-122v-40h228v40H306Zm0-120v-28h148v28H306Zm362 28h-28v-100q-73-5-126.5-54T460-620h28q0 63 50 104.5T653.93-474q67.07 0 116.57-41.5T820-620h28q0 72-53 120.5T668-446v100Z"/>
    </Icon>
  );
});

IconMaterialSpeechToTextW100.displayName = 'OnesyIconMaterialSpeechToTextW100';

export default IconMaterialSpeechToTextW100;
