import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTableRowsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableRowsW100Filled'

      short_name='TableRows'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M202-172q-12.75 0-21.37-8.63Q172-189.25 172-202v-123q0-12.75 8.63-21.38Q189.25-355 202-355h556q12.75 0 21.38 8.62Q788-337.75 788-325v123q0 12.75-8.62 21.37Q770.75-172 758-172H202Zm0-211q-12.75 0-21.37-8.63Q172-400.25 172-413v-134q0-12.75 8.63-21.38Q189.25-577 202-577h556q12.75 0 21.38 8.62Q788-559.75 788-547v134q0 12.75-8.62 21.37Q770.75-383 758-383H202Zm0-222q-12.75 0-21.37-8.63Q172-622.25 172-635v-123q0-12.75 8.63-21.38Q189.25-788 202-788h556q12.75 0 21.38 8.62Q788-770.75 788-758v123q0 12.75-8.62 21.37Q770.75-605 758-605H202Z"/>
    </Icon>
  );
});

IconMaterialTableRowsW100Filled.displayName = 'OnesyIconMaterialTableRowsW100Filled';

export default IconMaterialTableRowsW100Filled;
