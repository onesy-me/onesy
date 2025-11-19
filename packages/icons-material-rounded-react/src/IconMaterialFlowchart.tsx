import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlowchart = (props: IIcon) => {

  return (
    <Icon
      name='Flowchart'

      short_name='Flowchart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-160v-80H440v-200h-80v80H80v-240h280v80h80v-200h160v-80h280v240H600v-80h-80v320h80v-80h280v240H600Zm80-80h120v-80H680v80ZM160-440h120v-80H160v80Zm520-200h120v-80H680v80Zm0 400v-80 80ZM280-440v-80 80Zm400-200v-80 80Z"/>
    </Icon>
  );
};

IconMaterialFlowchart.displayName = 'OnesyIconMaterialFlowchart';

export default IconMaterialFlowchart;
