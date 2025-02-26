import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHorizontalSplitW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HorizontalSplitW100'

      short_name='HorizontalSplit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M202-252q-12.75 0-21.37-8.63Q172-269.25 172-282v-180q0-12.75 8.63-21.38Q189.25-492 202-492h556q12.75 0 21.38 8.62Q788-474.75 788-462v180q0 12.75-8.62 21.37Q770.75-252 758-252H202Zm-16-320q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h588q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H186Zm0-108q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h588q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H186Z"/>
    </Icon>
  );
});

IconMaterialHorizontalSplitW100.displayName = 'OnesyIconMaterialHorizontalSplitW100';

export default IconMaterialHorizontalSplitW100;
