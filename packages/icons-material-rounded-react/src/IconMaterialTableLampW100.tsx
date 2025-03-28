import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTableLampW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableLampW100'

      short_name='TableLamp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M534-146q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h240q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H534ZM242-588h154v-140q0-14-9-23t-23-9h-26q-10 0-17.5 5T309-741l-67 153Zm411.96 334q-5.96 0-9.96-4.02-4-4.03-4-9.98v-368q0-27-19.5-46.5T574-702H424v112q0 12.75-8.62 21.37Q406.75-560 394-560H245q-17 0-25.5-13.5T218-602l65-150q8-17 22.55-26.5T338-788h26q24.34 0 41.67 17Q423-754 424-730h150q39.17 0 66.58 27.42Q668-675.17 668-636v368q0 5.95-4.04 9.98-4.03 4.02-10 4.02ZM242-588h154-154Z"/>
    </Icon>
  );
});

IconMaterialTableLampW100.displayName = 'OnesyIconMaterialTableLampW100';

export default IconMaterialTableLampW100;
