import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBiotechW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BiotechW100'

      short_name='Biotech'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M246-146v-28h200v-132h-26q-72.21 0-123.1-50.9Q246-407.79 246-480q0-53.8 31.5-97.9Q309-622 360-642q0-43 35-66t73-6l-28-76 38-14-14-38 38-14 14 38 34-12 96 262-34 14 14 38-38 14-14-38-38 16-26-76q-11 18-29.5 29T440-560q-26 0-46.5-15T364-614q-41 17-65.5 53T274-480q0 60.83 42.58 103.42Q359.17-334 420-334h294v28H474v132h240v28H246Zm308-416 56-22-76-210-58 20 78 212Zm-114.07-26Q462-588 477-602.93t15-37Q492-662 477.07-677t-37-15Q418-692 403-677.07t-15 37Q388-618 402.93-603t37 15ZM554-562Zm-114-78Zm0 0Z"/>
    </Icon>
  );
});

IconMaterialBiotechW100.displayName = 'OnesyIconMaterialBiotechW100';

export default IconMaterialBiotechW100;
