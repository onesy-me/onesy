import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBarChart = (props: IIcon) => {

  return (
    <Icon
      name='BarChart'

      short_name='BarChart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-160v-280h160v280H640Zm-240 0v-640h160v640H400Zm-240 0v-440h160v440H160Z"/>
    </Icon>
  );
};

IconMaterialBarChart.displayName = 'OnesyIconMaterialBarChart';

export default IconMaterialBarChart;
