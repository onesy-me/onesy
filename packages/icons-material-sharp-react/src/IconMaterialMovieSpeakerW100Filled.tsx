import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMovieSpeakerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovieSpeakerW100Filled'

      short_name='MovieSpeaker'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m627-156-78-76h-97v-97h97l78-75v248Zm80 52v-31q56-8 93-49t37-97q0-56-37-97t-93-49v-30q68 8 113 58t45 119q0 68-45 118t-113 58Zm0-110v-133q22 7 35.5 25t13.5 42q0 23-13.5 41T707-214Zm-575 2v-536h60l54 108h120l-54-108h80l54 108h120l-54-108h80l54 108h120l-54-108h116v224q-29-18-62-27t-68-9h-47L509-429H352v217H132Z"/>
    </Icon>
  );
});

IconMaterialMovieSpeakerW100Filled.displayName = 'OnesyIconMaterialMovieSpeakerW100Filled';

export default IconMaterialMovieSpeakerW100Filled;
