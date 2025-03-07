import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMatchWordW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MatchWordW100Filled'

      short_name='MatchWord'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M152-251q-25 0-42.5-17.5T92-311v-48q0-6 4-10t10-4q6 0 10 4t4 10v48q0 14 9 23t23 9h656q14 0 23-9t9-23v-48q0-6 4-10t10-4q6 0 10 4t4 10v48q0 25-17.5 42.5T808-251H152Zm156-101q-41 0-65.5-22.5T218-435q0-42 29-68t76-26q20 0 40 4.5t35 12.5v-24q0-42-19-63t-57-21q-18 0-33.5 4.5T257-601q-5 3-11 3t-10-4q-4-4-3.5-10t5.5-9q19-14 39-19.5t44-5.5q54 0 79.5 28.5T426-532v157q0 6-4 10t-10 4q-6 0-10-4t-4-10v-28h-4q-14 26-35.5 38.5T308-352Zm20-151q-37 0-59 18t-22 49q0 27 16.5 42.5T307-378q40 0 65.5-30.5T398-486q-13-8-32-12.5t-38-4.5Zm304 152q-29 0-52-12t-35-34h-2v30q0 5-3.5 8.5T531-355q-5 0-9-4t-4-9v-379q0-6 4-10t10-4q6 0 10 4t4 10v126l-3 40h2q15-23 37.5-34.5T633-627q49 0 79 37t30 103q0 64-29.5 100T632-351Zm-1-247q-38 0-63 31.5T543-487q0 48 25 79t63 31q38 0 59.5-29.5T712-487q0-51-21.5-81T631-598Z"/>
    </Icon>
  );
});

IconMaterialMatchWordW100Filled.displayName = 'OnesyIconMaterialMatchWordW100Filled';

export default IconMaterialMatchWordW100Filled;
