import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTextToSpeechW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextToSpeechW100Filled'

      short_name='TextToSpeech'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-132v-696h311l-28 28H160v640h440v-106h28v134H132Zm134-134v-28h228v28H266Zm0-108v-28h148v28H266Zm308-39L451-536H346v-148h105l123-123v394Zm80-86v-222q29 20 41.5 51.5T708-610q0 28-13 59.5T654-499Zm0 153v-30q59-31 96.5-95.5T788-610q0-74-37.5-138.5T654-844v-30q70 32 116 105t46 159q0 86-46 159T654-346Z"/>
    </Icon>
  );
});

IconMaterialTextToSpeechW100Filled.displayName = 'OnesyIconMaterialTextToSpeechW100Filled';

export default IconMaterialTextToSpeechW100Filled;
