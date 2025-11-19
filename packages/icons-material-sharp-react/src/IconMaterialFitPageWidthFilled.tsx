import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFitPageWidthFilled = (props: IIcon) => {

  return (
    <Icon
      name='FitPageWidthFilled'

      short_name='FitPageWidth'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-360v-240L240-480l120 120Zm360-120L600-600v240l120-120ZM80-160v-640h800v640H80Z"/>
    </Icon>
  );
};

IconMaterialFitPageWidthFilled.displayName = 'OnesyIconMaterialFitPageWidthFilled';

export default IconMaterialFitPageWidthFilled;
