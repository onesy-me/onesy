import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRectangleFilled = (props: IIcon) => {

  return (
    <Icon
      name='RectangleFilled'

      short_name='Rectangle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h800v640H80Z"/>
    </Icon>
  );
};

IconMaterialRectangleFilled.displayName = 'OnesyIconMaterialRectangleFilled';

export default IconMaterialRectangleFilled;
