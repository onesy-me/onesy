import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFitWidthFilled = (props: IIcon) => {

  return (
    <Icon
      name='FitWidthFilled'

      short_name='FitWidth'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h80v720h-80Zm640 0v-720h80v720h-80ZM280-440v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Z"/>
    </Icon>
  );
};

IconMaterialFitWidthFilled.displayName = 'OnesyIconMaterialFitWidthFilled';

export default IconMaterialFitWidthFilled;
