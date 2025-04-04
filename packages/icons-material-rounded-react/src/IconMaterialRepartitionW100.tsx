import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRepartitionW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RepartitionW100'

      short_name='Repartition'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m185-646 84 83q5 4 5 9.5t-5 10.5q-5 5-10 5t-10-5l-96-96q-9-9-9-21t9-21l97-97q4-4 9.5-4t9.5 4q5 4 4.5 10t-4.5 10l-84 84h485q49 0 83.5 34.5T788-556q0 49-34.5 83.5T670-438H186q-6 0-10-4t-4-10q0-6 4-10t10-4h484q38 0 64-26t26-64q0-38-26-64t-64-26H185Zm-13 454v-66q0-25 17.5-42.5T232-318h496q25 0 42.5 17.5T788-258v66q0 25-17.5 42.5T728-132H232q-25 0-42.5-17.5T172-192Zm60 32h136v-130H232q-14 0-23 9t-9 23v66q0 14 9 23t23 9Zm164 0h167v-130H396v130Zm196 0h136q14 0 23-9t9-23v-66q0-14-9-23t-23-9H592v130Z"/>
    </Icon>
  );
});

IconMaterialRepartitionW100.displayName = 'OnesyIconMaterialRepartitionW100';

export default IconMaterialRepartitionW100;
