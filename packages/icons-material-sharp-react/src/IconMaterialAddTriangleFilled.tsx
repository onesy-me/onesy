import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddTriangleFilled = (props: IIcon) => {

  return (
    <Icon
      name='AddTriangleFilled'

      short_name='AddTriangle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m40-120 440-760 440 760H40Zm400-120h80v-80h80v-80h-80v-80h-80v80h-80v80h80v80Z"/>
    </Icon>
  );
};

IconMaterialAddTriangleFilled.displayName = 'OnesyIconMaterialAddTriangleFilled';

export default IconMaterialAddTriangleFilled;
