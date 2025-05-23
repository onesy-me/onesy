import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocationHomeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationHomeW100'

      short_name='LocationHome'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m516-749 208 157q11.25 8.25 17.63 21 6.37 12.75 6.37 27v312q0 24.75-17.62 42.37Q712.75-172 688-172H272q-24.75 0-42.37-17.63Q212-207.25 212-232v-312q0-14.25 6.38-27 6.37-12.75 17.62-21l208-157q15.68-12 35.84-12Q500-761 516-749Zm-36.12 363q39.12 0 66.62-27.38 27.5-27.38 27.5-66.5 0-39.12-27.38-66.62-27.38-27.5-66.5-27.5-39.12 0-66.62 27.38-27.5 27.38-27.5 66.5 0 39.12 27.38 66.62 27.38 27.5 66.5 27.5Zm.12-28q-27 0-46.5-19.5T414-480q0-27 19.5-46.5T480-546q27 0 46.5 19.5T546-480q0 27-19.5 46.5T480-414Zm-2.67 148Q423-266 372-249t-96 49h403q-44-32-95.67-49-51.68-17-106-17ZM240-544v340q50-43 110.68-66.5Q411.35-294 477-294q67.4 0 129.7 23Q669-248 720-205v-339q0-8-3.5-14.5T707-570L499-726q-8-7-19-7t-19 7L253-570q-6 5-9.5 11.5T240-544Zm240 64Z"/>
    </Icon>
  );
});

IconMaterialLocationHomeW100.displayName = 'OnesyIconMaterialLocationHomeW100';

export default IconMaterialLocationHomeW100;
