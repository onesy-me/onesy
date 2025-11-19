import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMovieSpeaker = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovieSpeaker'

      short_name='MovieSpeaker'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-240v-320 320Zm-80 80v-640h80l80 160h120l-80-160h80l80 160h120l-80-160h80l80 160h120l-80-160h200v240H160v320h160v80H80Zm560 80L520-200H400v-160h120l120-120v400Zm80 36v-82q52-14 86-56t34-98q0-56-34-98t-86-56v-82q86 14 143 80t57 156q0 90-57 156T720-44Zm0-144v-184q27 11 43.5 36t16.5 56q0 31-16.5 56T720-188Z"/>
    </Icon>
  );
});

IconMaterialMovieSpeaker.displayName = 'OnesyIconMaterialMovieSpeaker';

export default IconMaterialMovieSpeaker;
