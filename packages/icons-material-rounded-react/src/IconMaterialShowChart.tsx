import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShowChart = (props: IIcon) => {

  return (
    <Icon
      name='ShowChart'

      short_name='ShowChart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M110-250q-13-13-13-30t13-30l213-213q23-23 57-23t57 23l103 103 256-289q11-13 28.5-13t29.5 12q11 11 11.5 26.5T855-656L596-364q-23 26-57 27.5T480-360L380-460 170-250q-13 13-30 13t-30-13Z"/>
    </Icon>
  );
};

IconMaterialShowChart.displayName = 'OnesyIconMaterialShowChart';

export default IconMaterialShowChart;
