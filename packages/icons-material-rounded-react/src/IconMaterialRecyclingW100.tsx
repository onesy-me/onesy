import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRecyclingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RecyclingW100'

      short_name='Recycling'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m406-591 56-92-48-79q-9-16-27.5-16T359-762l-63 105q-6 11-3 23t14 18l58 35q11 6 22.5 3.5T406-591Zm294 243-55-92q-7-11-4-23t14-18l59-34q11-6 23-3.5t18 13.5l36 60q8 14 9.5 31t-6.5 31q-8 17-24 26t-34 9h-36ZM582-150l-81-81q-9-9-9-21t9-21l81-81q7-7 16.5-3.5T608-344v28h152l-46 93q-9 16-24.5 25.5T656-188h-48v28q0 10-9.5 13.5T582-150Zm-284-38q-16 0-29-8t-19-22q-6-13-6-27t7-26l27-45h108q13 0 21.5 8.5T416-286v68q0 13-8.5 21.5T386-188h-88Zm-79-91-52-104q-8-15-7-31.5t10-30.5l12-21-24-14q-8-5-6.5-15.5T163-508l111-28q12-3 22.5 3.5T310-514l28 111q2 10-6 16t-16 1l-24-15-73 122Zm403-281-111-28q-10-2-11-12.5t7-15.5l24-14-100-166h113q17 0 31.5 8.5T599-765l42 70 22-14q8-5 16.5.5T686-693l-28 111q-3 12-13.5 18.5T622-560Z"/>
    </Icon>
  );
});

IconMaterialRecyclingW100.displayName = 'OnesyIconMaterialRecyclingW100';

export default IconMaterialRecyclingW100;
