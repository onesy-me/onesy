import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWatchWakeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WatchWakeW100'

      short_name='WatchWake'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M704-332v-28h52v28h-52Zm0-134v-28h92v28h-92Zm0-134v-29h132v29H704ZM334-174l-30-108q-51-27-83.5-80T188-480q0-65 32.5-118t83.5-80l30-108h164l30 108q51 27 83.5 80T644-480q0 65-32.5 118T528-282l-30 108H334Zm82-106q83 0 141.5-58.5T616-480q0-83-58.5-141.5T416-680q-83 0-141.5 58.5T216-480q0 83 58.5 141.5T416-280Zm-78-414q21-7 39.83-10.5T416-708q19.34 0 38.17 3.5Q473-701 494-694l-18-64H356l-18 64Zm18 492h120l18-64q-21 7-39.83 10T416-253q-19.34 0-38.17-3Q359-259 338-266l18 64Zm-18-556h156-156Zm18 556h-18 156-138Z"/>
    </Icon>
  );
});

IconMaterialWatchWakeW100.displayName = 'OnesyIconMaterialWatchWakeW100';

export default IconMaterialWatchWakeW100;
