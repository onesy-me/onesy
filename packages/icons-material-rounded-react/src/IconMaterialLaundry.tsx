import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLaundry = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Laundry'

      short_name='Laundry'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m195-588 125-69v237q-21 2-41 6.5T240-401v-120l-41 22q-14 8-30 3.5T145-514L65-653q-8-14-3.5-30.5T80-708l199-115q12-7 25-12t27-5q14 0 24 8.5t15 21.5q14 38 36.5 64t73.5 26q51 0 73.5-26t36.5-64q5-13 15.5-21.5T630-840q14 0 26.5 5t24.5 12l199 115q14 8 18 24t-4 30l-79 140q-8 14-24 18.5t-30-3.5l-41-22v192l-63 55q-4 3-8 5.5t-9 4.5v-393l125 69 40-70-153-89q-24 49-70.5 78T480-640q-55 0-101.5-29T308-747l-154 89 41 70Zm285-52ZM160-215q-11-13-9.5-29.5T165-272l56-48q23-20 52.5-30.5T335-361q32 0 61 10.5t52 30.5l116 99q12 10 28.5 15.5T626-200q18 0 33.5-5t27.5-16l56-48q13-11 29.5-10t27.5 14q11 13 9.5 29.5T795-208l-56 48q-23 20-52 30t-61 10q-32 0-61.5-10T512-160l-116-99q-12-10-27.5-15.5T335-280q-17 0-33.5 5.5T273-259l-57 48q-13 11-29 10t-27-14Z"/>
    </Icon>
  );
});

IconMaterialLaundry.displayName = 'OnesyIconMaterialLaundry';

export default IconMaterialLaundry;
