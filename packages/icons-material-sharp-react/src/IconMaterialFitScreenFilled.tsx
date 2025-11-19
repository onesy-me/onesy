import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFitScreenFilled = (props: IIcon) => {

  return (
    <Icon
      name='FitScreenFilled'

      short_name='FitScreen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800-600v-120H680v-80h200v200h-80Zm-720 0v-200h200v80H160v120H80Zm600 440v-80h120v-120h80v200H680Zm-600 0v-200h80v120h120v80H80Zm160-160v-320h480v320H240Z"/>
    </Icon>
  );
};

IconMaterialFitScreenFilled.displayName = 'OnesyIconMaterialFitScreenFilled';

export default IconMaterialFitScreenFilled;
