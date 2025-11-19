import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLabPanelFilled = (props: IIcon) => {

  return (
    <Icon
      name='LabPanelFilled'

      short_name='LabPanel'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-120v-360h80v-171H80v-189h360v189h-40v171h160v-171h-40v-189h360v189h-40v171h80v360H40Zm600-360h120v-160H640v160Zm-440 0h120v-160H200v160Z"/>
    </Icon>
  );
};

IconMaterialLabPanelFilled.displayName = 'OnesyIconMaterialLabPanelFilled';

export default IconMaterialLabPanelFilled;
