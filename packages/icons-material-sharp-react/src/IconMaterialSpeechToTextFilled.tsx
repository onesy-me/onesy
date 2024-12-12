import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpeechToTextFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeechToTextFilled'

      short_name='SpeechToText'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-560q-33 0-56.5-23T600-640v-160q0-34 23.5-57t56.5-23q34 0 57 23t23 57v160q0 34-23 57t-57 23ZM120-80v-800h400v80H200v640h440v-80h80v160H120Zm160-160v-80h280v80H280Zm0-120v-80h200v80H280Zm440 40h-80v-104q-77-14-128.5-74.5T460-640h80q0 58 41 99t99 41q59 0 99.5-41t40.5-99h80q0 81-51 141.5T720-424v104Z"/>
    </Icon>
  );
});

IconMaterialSpeechToTextFilled.displayName = 'OnesyIconMaterialSpeechToTextFilled';

export default IconMaterialSpeechToTextFilled;
