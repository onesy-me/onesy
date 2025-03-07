import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOnsenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OnsenW100Filled'

      short_name='Onsen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M333-436q2-10 2.5-17t.5-15q0-35-15-59t-34-48q-27-35-38-64t-11-62q0-10 .5-20.5T241-744h28q-2 11-2.5 21t-.5 19q0 40 15.5 67t33.5 52q28 37 38.5 63t10.5 56q0 8-.5 15t-2.5 15h-28Zm130 0q2-10 2.5-17t.5-15q0-35-15-59t-34-48q-27-35-38-64t-11-62q0-10 .5-20.5T371-744h28q-2 11-3 21t-1 19q0 40 15.5 67t33.5 52q28 37 38.5 63t10.5 56v15q0 7-2 15h-28Zm130 0q2-10 2.5-17t.5-15q0-35-15-59t-34-48q-27-35-38-64t-11-62q0-10 .5-20.5T501-744h28q-2 11-3 21t-1 19q0 40 15.5 67t33.5 52q28 37 38.5 63t10.5 56v15q0 7-2 15h-28ZM480-216q-127 0-215.5-45T176-371q0-24 17.5-48.5T244-464v31q-20 14-30 30t-10 31q0 52 82 90t194 38q112 0 194-38t82-90q0-15-10-31t-30-30v-31q33 20 50.5 44.5T784-371q0 65-88.5 110T480-216Z"/>
    </Icon>
  );
});

IconMaterialOnsenW100Filled.displayName = 'OnesyIconMaterialOnsenW100Filled';

export default IconMaterialOnsenW100Filled;
