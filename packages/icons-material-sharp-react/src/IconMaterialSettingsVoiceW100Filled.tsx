import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsVoiceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsVoiceW100Filled'

      short_name='SettingsVoice'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-12q-11 0-19.5-8.5T292-40q0-11 8.5-19.5T320-68q11 0 19.5 8.5T348-40q0 11-8.5 19.5T320-12Zm160 0q-11 0-19.5-8.5T452-40q0-11 8.5-19.5T480-68q11 0 19.5 8.5T508-40q0 11-8.5 19.5T480-12Zm160 0q-11 0-19.5-8.5T612-40q0-11 8.5-19.5T640-68q11 0 19.5 8.5T668-40q0 11-8.5 19.5T640-12ZM480-452q-29 0-48.5-19.5T412-520v-240q0-29 19.5-48.5T480-828q29 0 48.5 19.5T548-760v240q0 29-19.5 48.5T480-452Zm-14 306v-144q-91-8-152.5-73.5T252-520h28q0 83 58.5 141.5T480-320q83 0 141.5-58.5T680-520h28q0 91-61.5 156.5T494-290v144h-28Z"/>
    </Icon>
  );
});

IconMaterialSettingsVoiceW100Filled.displayName = 'OnesyIconMaterialSettingsVoiceW100Filled';

export default IconMaterialSettingsVoiceW100Filled;
