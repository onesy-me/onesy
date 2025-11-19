import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCropSquareFilled = (props: IIcon) => {

  return (
    <Icon
      name='CropSquareFilled'

      short_name='CropSquare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Z"/>
    </Icon>
  );
};

IconMaterialCropSquareFilled.displayName = 'OnesyIconMaterialCropSquareFilled';

export default IconMaterialCropSquareFilled;
