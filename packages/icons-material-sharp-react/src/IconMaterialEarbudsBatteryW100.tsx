import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEarbudsBatteryW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EarbudsBatteryW100'

      short_name='EarbudsBattery'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M674-266v-396h76v-28h28v28h76v396H674Zm28-28h124-124Zm-476.83 28q-50.17 0-84.67-34.45t-34.5-84.8V-690h128v128H134v177q0 38 26.5 64.5T225-294q38 0 64.5-26.5T316-385v-185.65q0-50.39 34.33-84.87Q384.66-690 434.83-690t84.67 34q34.5 34 34.5 85v305H426v-128h100v-177q0-38-26.5-64.5T435-662q-38 0-64.5 26.5T344-571v185.65q0 50.39-34.33 84.87Q275.34-266 225.17-266ZM702-294h124v-340H702v340Z"/>
    </Icon>
  );
});

IconMaterialEarbudsBatteryW100.displayName = 'OnesyIconMaterialEarbudsBatteryW100';

export default IconMaterialEarbudsBatteryW100;
