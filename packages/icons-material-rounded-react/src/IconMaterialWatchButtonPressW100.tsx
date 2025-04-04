import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWatchButtonPressW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WatchButtonPressW100'

      short_name='WatchButtonPress'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M757.96-481q-5.96 0-9.96-4.02-4-4.03-4-9.98v-277q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v277q0 5.95-4.04 9.98-4.03 4.02-10 4.02ZM357-174q-9.79 0-17.89-5.98-8.1-5.98-11.11-16.02l-24-86q-51-27-83.5-80T188-480q0-65 32.5-118t83.5-80l24-86q3.01-10.04 11.11-16.02T357-786h118q9.79 0 17.89 5.98 8.1 5.98 11.11 16.02l24 86q51 27 83.5 80T644-480q0 65-32.5 118T528-282l-24 86q-3.01 10.04-11.11 16.02T475-174H357Zm59-106q83 0 141.5-58.5T616-480q0-83-58.5-141.5T416-680q-83 0-141.5 58.5T216-480q0 83 58.5 141.5T416-280Zm-78-414q21-7 39.83-10.5T416-708q19.34 0 38.17 3.5Q473-701 494-694l-18-64H356l-18 64Zm18 492h120l18-64q-21 7-39.83 10T416-253q-19.34 0-38.17-3Q359-259 338-266l18 64Zm-18-556h156-156Zm18 556h-18 156-138Z"/>
    </Icon>
  );
});

IconMaterialWatchButtonPressW100.displayName = 'OnesyIconMaterialWatchButtonPressW100';

export default IconMaterialWatchButtonPressW100;
